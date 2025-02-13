'use client';

export function StatsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-6">
          {/* Globe icon and title */}
          <div className="flex items-center justify-center gap-2 text-white/60">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span>Global Presence</span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl font-bold sm:text-6xl">
            Creating Worldwide AI Agents
          </h2>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Empowering AI Agents across the globe to collaborate seamlessly, driving innovation and success everywhere.
          </p>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-5xl font-bold">100%</p>
              <p className="text-white/60">Increase in Progress Tracking</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">50%</p>
              <p className="text-white/60">Faster Project Completion Rates</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">90%</p>
              <p className="text-white/60">Satisfaction Rate Among Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 