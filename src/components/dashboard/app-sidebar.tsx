'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  BarChart3,
  Binoculars,
  BookOpen,
  Box,
  Brain,
  Briefcase,
  Droplet,
  HomeIcon,
  LineChart,
  Lock,
  Milestone,
  Twitter,
} from 'lucide-react';

import { Brand } from '@/components/logo';
import { TwitterChecker } from '@/components/twitter-checker';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { APP_VERSION, IS_BETA } from '@/lib/constants';
import { cn } from '@/lib/utils';

import { AppSidebarConversations } from './app-sidebar-conversations';
import { AppSidebarUser } from './app-sidebar-user';

const AppSidebarHeader = () => {
  return (
    <SidebarHeader>
      <div className="relative overflow-hidden rounded-xl border border-white/[0.05] bg-black/20 shadow-xl backdrop-blur-md">
        <div className="absolute inset-px rounded-xl bg-gradient-to-r from-[#4F46E5]/20 to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute -left-24 top-8 h-32 w-32 rounded-full bg-[#4F46E5]/10 blur-[32px]" />
        <div className="absolute -right-24 top-8 h-32 w-32 rounded-full bg-purple-500/10 blur-[32px]" />
        <div className="relative flex h-14 items-center px-4">
          <Brand className="group-data-[collapsible=icon]:hidden" />
        </div>
      </div>
    </SidebarHeader>
  );
};

const AppSidebarFooter = () => {
  return (
    <SidebarFooter>
      <AppSidebarUser />
    </SidebarFooter>
  );
};

const ExploreItems = [
  {
    title: 'Home',
    url: '/home',
    segment: 'home',
    icon: HomeIcon,
    external: false,
  },
  {
    title: 'Roadmap',
    url: '/roadmap',
    segment: 'roadmap',
    icon: Milestone,
    external: false,
  },
] as const;

interface TradingItem {
  title: string;
  url: string;
  segment: string;
  icon: React.ComponentType<any>;
  external: boolean;
  locked: boolean;
  component?: React.ComponentType;
}

const TradingItems: readonly TradingItem[] = [
  {
    title: 'Whale Tracker',
    url: '/trading/whale-tracker',
    segment: 'whale-tracker',
    icon: Binoculars,
    external: false,
    locked: true,
  },
  {
    title: 'Twitter Checker',
    url: '/trading/twitter-checker',
    segment: 'twitter-checker',
    icon: Twitter,
    external: false,
    locked: false,
  },
  {
    title: 'Rug Checker',
    url: '/trading/rug-checker',
    segment: 'rug-checker',
    icon: Box,
    external: false,
    locked: true,
  },
  {
    title: 'Liquidity Manager',
    url: '/trading/liquidity-manager',
    segment: 'liquidity-manager',
    icon: Droplet,
    external: false,
    locked: true,
  },
  {
    title: 'DEX Aggregator',
    url: '/trading/dex-aggregator',
    segment: 'dex-aggregator',
    icon: LineChart,
    external: false,
    locked: true,
  },
] as const;

export function AppSidebar() {
  const pathname = usePathname();

  const getIsActive = (itemSegment: string) => {
    if (itemSegment === 'home') {
      return pathname === '/home';
    }
    return pathname.startsWith(`/${itemSegment}`);
  };

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="hidden border-r border-white/[0.05] bg-gradient-to-b from-[#0A0A0B] via-[#0D0B1F] to-[#0A0A0B] shadow-2xl backdrop-blur-md md:flex"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4F46E5]/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('/mesh.png')] opacity-[0.015] mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.02]" />
      <div className="absolute -right-32 top-32 h-64 w-64 rounded-full bg-[#4F46E5]/5 blur-[64px]" />
      <div className="absolute -left-32 bottom-32 h-64 w-64 rounded-full bg-purple-500/5 blur-[64px]" />

      <div className="relative z-10 flex h-full w-full flex-col">
        <AppSidebarHeader />

        <SidebarContent>
          <SidebarContent className="px-3">
            <SidebarGroup>
              <SidebarGroupLabel className="px-2 text-sm font-medium text-white/40">
                Explore
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {ExploreItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={getIsActive(item.segment)}
                        className="relative overflow-hidden rounded-lg transition-all duration-200 hover:bg-white/5"
                      >
                        <Link
                          href={item.url}
                          target={item.external ? '_blank' : undefined}
                          className="group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/10 to-purple-500/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          <item.icon className="h-4 w-4 transition-colors group-hover:text-white" />
                          <span className="transition-colors group-hover:text-white">
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="px-2 text-sm font-medium text-white/40">
                Trading Agents
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {TradingItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      {item.component ? (
                        <div className="px-2 py-4">
                          <h3 className="mb-2 text-sm font-medium">
                            {item.title}
                          </h3>
                          <item.component />
                        </div>
                      ) : (
                        <SidebarMenuButton
                          asChild
                          isActive={getIsActive(item.segment)}
                          disabled={item.locked}
                          className="relative overflow-hidden rounded-lg transition-all duration-200 hover:bg-white/5"
                        >
                          <Link href={item.url} className="group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/10 to-purple-500/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                            <item.icon className="h-4 w-4 transition-colors group-hover:text-white" />
                            <span className="transition-colors group-hover:text-white">
                              {item.title}
                            </span>
                            {item.locked && (
                              <Lock className="ml-auto h-3 w-3 text-white/20" />
                            )}
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="px-2 text-sm font-medium text-white/40">
                Chat History
              </SidebarGroupLabel>
              <AppSidebarConversations />
            </SidebarGroup>
          </SidebarContent>
        </SidebarContent>

        <AppSidebarFooter />
      </div>
    </Sidebar>
  );
}
