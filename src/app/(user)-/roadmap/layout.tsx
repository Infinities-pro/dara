import ShootingStars from '@/components/ui/shooting-stars';

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0A0A0B] via-[#0D0B1F] to-[#0A0A0B]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4F46E5]/10 via-transparent to-transparent" />
      <ShootingStars />
      <div className="absolute inset-0 bg-[url('/mesh.png')] opacity-[0.015] mix-blend-screen" />
      <div className="absolute -left-24 top-24 h-48 w-48 rounded-full bg-[#4F46E5]/20 blur-[100px] animate-pulse" />
      <div className="absolute -right-24 bottom-24 h-48 w-48 rounded-full bg-purple-500/20 blur-[100px] animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.02]" />
      
      <div className="relative z-10 px-6 py-12">
        {children}
      </div>
    </div>
  );
} 