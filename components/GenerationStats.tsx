import { Generation } from "../types"

interface GenerationStatsProps {
  generation: Generation
}

export function GenerationStats({ generation }: GenerationStatsProps) {
  const avgPerplexity = Math.exp(-generation.tokens.reduce((sum, token) => sum + token.logProb, 0) / generation.tokens.length)
  const avgLogProb = generation.tokens.reduce((sum, token) => sum + token.logProb, 0) / generation.tokens.length
  const avgProb = generation.tokens.reduce((sum, token) => sum + token.prob, 0) / generation.tokens.length

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg text-sm">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="font-semibold">Avg. Perplexity</p>
          <p>{avgPerplexity.toFixed(4)}</p>
        </div>
        <div>
          <p className="font-semibold">Avg. Log Prob</p>
          <p>{avgLogProb.toFixed(4)}</p>
        </div>
        <div>
          <p className="font-semibold">Avg. Prob</p>
          <p>{avgProb.toFixed(4)}</p>
        </div>
      </div>
    </div>
  )
}

