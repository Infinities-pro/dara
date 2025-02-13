interface TokenAnalysisProps {
  symbol: string;
  address: string;
  trustScore: number;
  devBuys: string;
  blockAnalysis: string;
  initialBuysAnalysis: string;
  isBundled: boolean;
}

export function TokenAnalysis({
  symbol,
  address,
  trustScore,
  devBuys,
  blockAnalysis,
  initialBuysAnalysis,
  isBundled,
}: TokenAnalysisProps) {
  return (
    <div className="rounded-2xl bg-white p-6">
      {/* Header with Token Info */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-black text-2xl font-bold text-white">
          {symbol.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="text-black">${symbol}</span>
          <span className="text-xs text-black/60">{address}</span>
        </div>
      </div>

      {/* Analysis Results */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-medium text-black">
            Trust Score
          </span>
          <span className="rounded-full bg-black px-3 py-1 text-sm text-white">
            {trustScore}/100
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-black/10 pt-6">
          <span className="text-[15px] font-medium text-black">Dev Buys</span>
          <span className="text-right text-[15px] text-black/60">
            {devBuys}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-black/10 pt-6">
          <span className="text-[15px] font-medium text-black">
            Block Analysis
          </span>
          <span className="max-w-[60%] text-right text-[15px] text-black/60">
            {blockAnalysis}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-black/10 pt-6">
          <span className="text-[15px] font-medium text-black">
            Initial Buys Analysis
          </span>
          <span className="max-w-[60%] text-right text-[15px] text-black/60">
            {initialBuysAnalysis}
          </span>
        </div>
      </div>

      {/* Bundled Status */}
      <div className="mt-6 text-[15px] text-black/60">
        ${symbol} does {!isBundled && 'not'} seem to be bundled.
      </div>
    </div>
  );
}
