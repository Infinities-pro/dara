import { cookies } from 'next/headers';

import { AppSidebar } from '@/components/dashboard/app-sidebar';
import ShootingStars from '@/components/ui/shooting-stars';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value !== 'false';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      {/* Background elements */}
      <div className="fixed inset-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07071C] via-[#0D0B1F] to-[#07071C]" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF4D4D]/10 via-transparent to-transparent" />

        {/* Mesh texture */}
        <div className="absolute inset-0 bg-[url('/mesh.png')] opacity-[0.015] mix-blend-screen" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.02]" />

        {/* Gradient orbs */}
        <div className="absolute -left-24 top-24 h-48 w-48 animate-pulse rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] opacity-20 blur-[100px]" />
        <div className="absolute -right-24 bottom-24 h-48 w-48 animate-pulse rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FFB347] opacity-20 blur-[100px] delay-1000" />

        {/* Shooting stars effect */}
        <ShootingStars />
      </div>

      <AppSidebar />
      <main className="relative w-full">
        <SidebarTrigger className="absolute z-50 mt-2 md:hidden" />
        {children}
      </main>
    </SidebarProvider>
  );
}
