import { useState } from "react"
import { Token } from "../types"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { getColorForProbability } from "@/utils/colorUtils"

interface TokenDisplayProps {
  token: Token
  isHighlighted: boolean
}

export function TokenDisplay({ token, isHighlighted }: TokenDisplayProps) {
  const [isHovered, setIsHovered] = useState(false)
  const hoverColor = getColorForProbability(token.prob)
  const backgroundColor = isHighlighted ? getColorForProbability(token.prob, true) : 'transparent'

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span 
            className="inline-block px-1 py-0.5 rounded cursor-pointer m-0.5 transition-colors duration-200"
            style={{ 
              color: isHovered ? hoverColor : 'inherit',
              backgroundColor: backgroundColor,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {token.text}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-sm">
            <p>Log Probability: {token.logProb.toFixed(4)}</p>
            <p>Probability: {token.prob.toFixed(4)}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

