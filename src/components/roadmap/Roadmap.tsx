'use client';

import { motion } from 'framer-motion';

const roadmapData = [
  {
    id: "copilot-1",
    title: "Copilot",
    description: "Initial release of the Intelligent Solana Copilot.",
    quarter: "Q1",
    year: 2025,
    status: "completed" as const,
  },
  {
    id: "whale-1",
    title: "Whale Trading Agent",
    description: "Release of the Whale trading agent.",
    quarter: "Q1",
    year: 2025,
    status: "completed" as const,
  },
  {
    id: "rug-1",
    title: "Rug Checker Agent",
    description: "Release of the Rug Checker agent.",
    quarter: "Q1",
    year: 2025,
    status: "in-progress" as const,
  },
  {
    id: "x-1",
    title: "Intelligent X Agent",
    description: "Launch of the Intelligent X agent.",
    quarter: "Q1",
    year: 2025,
    status: "in-progress" as const,
  },
  {
    id: "dex-1",
    title: "Dex Aggregator",
    description: "Release of the Dex Aggregator.",
    quarter: "Q2",
    year: 2025,
    status: "planned" as const,
  },
];

const statusColors = {
  completed: "bg-rose-500",
  "in-progress": "bg-blue-500",
  planned: "bg-gray-500",
} as const;

const legendItems = [
  { status: "completed" as const, label: "Completed" },
  { status: "in-progress" as const, label: "In Progress" },
  { status: "planned" as const, label: "Planned" },
];

export default function Roadmap() {
  return (
    <div className="relative mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center gap-6 mb-12"
      >
        {legendItems.map((item) => (
          <div key={item.status} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${statusColors[item.status]} border border-white/20`} />
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-12 bottom-0 w-[2px] bg-border/50" />

        <div className="space-y-16">
          {roadmapData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${
                  isLeft
                    ? "justify-start md:justify-start"
                    : "justify-start md:justify-end"
                } items-center`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      statusColors[item.status]
                    } border-4 border-white dark:border-background shadow-sm`}
                  />
                </div>

                <div
                  className={`w-full md:w-[calc(50%-3rem)] pl-12 ${
                    isLeft ? "md:pr-12 md:pl-0" : "md:pl-12"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      {item.quarter} {item.year}
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 