import { Generation } from "../types"
import { TokenDisplay } from "./TokenDisplay"
import { GenerationStats } from "./GenerationStats"

interface GenerationDisplayProps {
  generation: Generation
  isHighlighted: boolean
}

export function GenerationDisplay({ generation, isHighlighted }: GenerationDisplayProps) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Generation</h3>
      <div className="p-4 bg-white rounded shadow">
        {generation.tokens.map((token, index) => (
          <TokenDisplay key={index} token={token} isHighlighted={isHighlighted} />
        ))}
      </div>
      <GenerationStats generation={generation} />
    </div>
  )
}

