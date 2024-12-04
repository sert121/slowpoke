import { Token } from "../types"
import { TokenDisplay } from "./TokenDisplay"

interface PromptDisplayProps {
  promptTokens: Token[]
  isHighlighted: boolean
}

export function PromptDisplay({ promptTokens, isHighlighted }: PromptDisplayProps) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Prompt</h3>
      <div className="p-4 bg-white rounded shadow">
        {promptTokens.map((token, index) => (
          <TokenDisplay key={index} token={token} isHighlighted={isHighlighted} />
        ))}
      </div>
    </div>
  )
}

