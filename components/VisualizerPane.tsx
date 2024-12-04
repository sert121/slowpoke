import { useState } from "react"
import { PromptSelector } from "./PromptSelector"
import { PromptDisplay } from "./PromptDisplay"
import { GenerationDisplay } from "./GenerationDisplay"
import { HighlightToggle } from "./HighlightToggle"
import { VisualizerData } from "../types"

interface VisualizerPaneProps {
  data: VisualizerData
  modelName: string
  selectedPrompt: string
  onPromptChange: (promptId: string) => void
}

export function VisualizerPane({ data, modelName, selectedPrompt, onPromptChange }: VisualizerPaneProps) {
  const [isHighlighted, setIsHighlighted] = useState(false)

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{modelName}</h2>
        <div className="mt-[-8px] mr-[-8px]">
          <HighlightToggle isHighlighted={isHighlighted} onToggle={setIsHighlighted} />
        </div>
      </div>
      <PromptSelector
        prompts={data.prompts}
        selectedPrompt={selectedPrompt}
        onSelectPrompt={onPromptChange}
      />
      {data.promptTokens[selectedPrompt] && (
        <PromptDisplay 
          promptTokens={data.promptTokens[selectedPrompt]} 
          isHighlighted={isHighlighted}
        />
      )}
      {data.generations[selectedPrompt] && (
        <GenerationDisplay 
          generation={data.generations[selectedPrompt]} 
          isHighlighted={isHighlighted}
        />
      )}
    </div>
  )
}

