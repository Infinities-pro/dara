'use client';

import { cn } from '@/lib/utils';

interface ToolResultProps {
  toolName: string;
  result: any;
  header: React.ReactNode;
}

export function ToolResult({ toolName, result, header }: ToolResultProps) {
  const isError = result && typeof result === 'object' && 'error' in result;

  return (
    <div className="group relative overflow-hidden rounded-lg bg-muted/40 transition-colors hover:bg-muted/60">
      <div className="px-3 py-2">{header}</div>
      <div className="mt-px px-3">
        <pre
          className={cn(
            'overflow-x-auto rounded-lg bg-muted/40 p-3 text-xs',
            isError && 'text-destructive',
          )}
        >
          <code>
            {typeof result === 'string'
              ? result
              : JSON.stringify(result, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}
