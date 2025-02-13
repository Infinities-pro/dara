'use client';

import { startTransition, useOptimistic } from 'react';

import { useRouter } from 'next/navigation';

import {
  Discord,
  OAuthTokens,
  Twitter,
  User,
  WalletWithMetadata,
  useOAuthTokens,
  usePrivy,
} from '@privy-io/react-auth';
import { useSolanaWallets } from '@privy-io/react-auth/solana';
import { HelpCircle } from 'lucide-react';
import { mutate } from 'swr';

import { WalletCard } from '@/components/dashboard/wallet-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CopyableText } from '@/components/ui/copyable-text';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useUser } from '@/hooks/use-user';
import { useEmbeddedWallets } from '@/hooks/use-wallets';
import { cn } from '@/lib/utils';
import {
  formatPrivyId,
  formatUserCreationDate,
  formatWalletAddress,
  truncate,
} from '@/lib/utils/format';
import { getUserID, grantDiscordRole } from '@/lib/utils/grant-discord-role';
import { type UserUpdateData, updateUser } from '@/server/actions/user';
import { EmbeddedWallet } from '@/types/db';

import { LoadingStateSkeleton } from './loading-skeleton';

export function AccountContent() {
  const router = useRouter();
  const { ready } = usePrivy();
  const {
    isLoading: isUserLoading,
    user,
    linkTwitter,
    unlinkTwitter,
    linkEmail,
    unlinkEmail,
    linkDiscord,
    unlinkDiscord,
    linkWallet,
    unlinkWallet,
  } = useUser();

  const [optimisticUser, updateOptimisticUser] = useOptimistic(
    {
      degenMode: user?.degenMode || false,
    },
    (state, update: UserUpdateData) => ({
      ...state,
      ...update,
    }),
  );

  const {
    data: embeddedWallets = [],
    error: walletsError,
    isLoading: isWalletsLoading,
    mutate: mutateWallets,
  } = useEmbeddedWallets();

  const { createWallet: createSolanaWallet } = useSolanaWallets();

  const { reauthorize } = useOAuthTokens({
    onOAuthTokenGrant: (tokens: OAuthTokens, { user }: { user: User }) => {
      // Grant Discord role
      handleGrantDiscordRole(tokens.accessToken);
    },
  });

  if (isUserLoading || isWalletsLoading || !user) {
    return <LoadingStateSkeleton />;
  }
  if (walletsError) {
    return (
      <div className="p-4 text-sm text-red-500">
        Failed to load wallets: {walletsError.message}
      </div>
    );
  }

  const privyUser = user.privyUser;
  const userData = {
    privyId: privyUser?.id,
    twitter: privyUser?.twitter as Twitter | undefined,
    email: privyUser?.email?.address,
    phone: privyUser?.phone?.number,
    walletAddress: privyUser?.wallet?.address,
    createdAt: formatUserCreationDate(user?.createdAt?.toString()),
    discord: privyUser?.discord as Discord | undefined,
  };

  const privyWallets = embeddedWallets.filter(
    (w: EmbeddedWallet) => w.walletSource === 'PRIVY' && w.chain === 'SOLANA',
  );
  const legacyWallets = embeddedWallets.filter(
    (w: EmbeddedWallet) => w.walletSource === 'CUSTOM' && w.chain === 'SOLANA',
  );

  const allUserLinkedAccounts = privyUser?.linkedAccounts || [];
  const linkedSolanaWallet = allUserLinkedAccounts.find(
    (acct): acct is WalletWithMetadata =>
      acct.type === 'wallet' &&
      acct.walletClientType !== 'privy' &&
      acct.chainType === 'solana',
  );

  const avatarLabel = userData.walletAddress
    ? userData.walletAddress.substring(0, 2).toUpperCase()
    : '?';

  async function handleGrantDiscordRole(accessToken: string) {
    try {
      const discordUserId = await getUserID(accessToken);
      await grantDiscordRole(discordUserId);
    } catch (error) {
      throw new Error(`Failed to grant Discord role: ${error}`);
    }
  }

  const allWalletAddresses = [
    ...(linkedSolanaWallet ? [linkedSolanaWallet.address] : []),
    ...privyWallets.map((w) => w.publicKey),
    ...legacyWallets.map((w) => w.publicKey),
  ];

  const handleUpdateUser = async (data: UserUpdateData) => {
    startTransition(() => {
      updateOptimisticUser(data);
    });

    const result = await updateUser(data);
    if (result.success) {
      await mutate(`user-${userData.privyId}`);
    }
  };

  return (
    <div className="flex flex-1 flex-col py-8">
      <div className="w-full px-8">
        <div className="max-w-3xl space-y-6">
          {/* Profile Information Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium text-muted-foreground">
              Profile Information
            </h2>

            <Card className="group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-black/20 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/30">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* User basic information */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10 rounded-lg">
                      <AvatarImage
                        src={userData.twitter?.profilePictureUrl || undefined}
                        className="rounded-lg object-cover"
                      />
                      <AvatarFallback className="rounded-lg bg-sidebar-accent">
                        {avatarLabel}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">
                        {userData.twitter
                          ? `@${userData.twitter.username}`
                          : formatWalletAddress(userData.walletAddress)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Member since {userData.createdAt}
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-sidebar-accent/50" />

                  {/* Contact information */}
                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs text-muted-foreground">
                        Account ID
                      </Label>
                      <div className="mt-1">
                        <CopyableText text={formatPrivyId(userData.privyId)} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Label className="text-xs text-muted-foreground">
                          Degen Mode
                        </Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="h-3.5 w-3.5 text-muted-foreground/70" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                Enable Degen Mode to skip confirmation prompts
                                for on-chain actions
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="mt-1 flex h-8 items-center justify-between">
                        <span className={cn('text-sm font-medium')}>
                          {optimisticUser.degenMode ? 'Enabled' : 'Disabled'}
                        </span>
                        <Switch
                          checked={optimisticUser.degenMode}
                          onCheckedChange={async (checked) => {
                            await handleUpdateUser({ degenMode: checked });
                          }}
                          aria-label="Toggle degen mode"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Wallet Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium text-muted-foreground">
              Wallet
            </h2>
            {privyWallets.length > 0
              ? privyWallets.map((wallet) => (
                  <WalletCard
                    key={wallet.id}
                    wallet={wallet}
                    mutateWallets={mutateWallets}
                    allWalletAddresses={allWalletAddresses}
                  />
                ))
              : ready && (
                  <Card className="group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-black/20 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/30">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div>
                              <p className="text-sm font-medium">Create Wallet</p>
                              <p className="text-xs text-muted-foreground">
                                None created yet
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              createSolanaWallet().then(() => mutateWallets())
                            }
                            className={cn('min-w-[100px] text-xs')}
                          >
                            Create
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
          </section>
        </div>
      </div>
    </div>
  );
}
