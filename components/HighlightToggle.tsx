import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface HighlightToggleProps {
  isHighlighted: boolean
  onToggle: (checked: boolean) => void
}

export function HighlightToggle({ isHighlighted, onToggle }: HighlightToggleProps) {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <Switch id="highlight-mode" checked={isHighlighted} onCheckedChange={onToggle} />
      <Label htmlFor="highlight-mode">Highlight</Label>
    </div>
  )
}

