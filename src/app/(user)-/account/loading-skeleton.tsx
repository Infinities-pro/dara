import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export function LoadingStateSkeleton() {
  return (
    <div className="flex flex-1 flex-col py-8">
      <div className="w-full px-8">
        <div className="max-w-3xl space-y-6">
          <section className="space-y-4">
            <h2 className="text-sm font-medium text-white/60">
              Profile Information
            </h2>

            <Card className="group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-black/20 p-6 shadow-2xl backdrop-blur-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-10 w-10 rounded-lg bg-white/[0.06]" />
                    <div className="space-y-1">
                      <Skeleton className="h-4 w-28 bg-white/[0.06]" />
                      <Skeleton className="h-3 w-40 bg-white/[0.06]" />
                    </div>
                  </div>

                  <Separator className="bg-white/10" />

                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs text-white/50">
                        Account ID
                      </Label>
                      <div className="mt-1">
                        <Skeleton className="h-6 w-full bg-white/[0.06]" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-white/50">
                        Early Access Program
                      </Label>
                      <div className="mt-1">
                        <Skeleton className="h-6 w-full bg-white/[0.06]" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-white/50">
                        Degen Mode
                      </Label>
                      <div className="mt-1 flex flex-col items-center">
                        <Skeleton className="h-8 w-full bg-white/[0.06]" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Wallet Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium text-white/60">
              Wallet
            </h2>
            <Card className="group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-black/20 p-6 shadow-2xl backdrop-blur-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs text-white/50">
                      Public Key
                    </Label>
                    <div className="mt-1">
                      <Skeleton className="h-6 w-full bg-white/[0.06]" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-white/50">
                      Balance
                    </Label>
                    <div className="mt-1">
                      <Skeleton className="h-8 w-32 bg-white/[0.06]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-9 w-24 rounded-md bg-white/[0.06]" />
                    <Skeleton className="h-9 w-24 rounded-md bg-white/[0.06]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
