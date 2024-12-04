import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Prompt } from "../types"

interface PromptSelectorProps {
  prompts: Prompt[]
  selectedPrompt: string
  onSelectPrompt: (promptId: string) => void
}

export function PromptSelector({ prompts, selectedPrompt, onSelectPrompt }: PromptSelectorProps) {
  return (
    <Select value={selectedPrompt} onValueChange={onSelectPrompt}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a prompt" />
      </SelectTrigger>
      <SelectContent>
        {prompts.map((prompt) => (
          <SelectItem key={prompt.id} value={prompt.id}>
            {prompt.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

