'use client';

import { useState } from "react";
import { VisualizerPane } from "@/components/VisualizerPane";
import { SampleGrid } from "@/components/SampleGrid";
import { mockData } from "@/data/mockData";
import {mockData2} from "@/data/mockData_v2";

export default function TokenVisualizer() {
  const [selectedPrompt, setSelectedPrompt] = useState<string>(mockData.prompts[0].id);

  // Handles prompt selection from the grid
  const handlePromptChange = (promptId: string) => {
    setSelectedPrompt(promptId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Token Visualizer</h1>

      {/* Grid Section */}
      <div className="mb-6">
        <SampleGrid
          samples={mockData.prompts}
          onSampleSelect={(sample) => setSelectedPrompt(sample.id)}
        />
      </div>

      {/* Two Panes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <VisualizerPane
          data={mockData}
          modelName="GPT-3.5"
          selectedPrompt={selectedPrompt}
          onPromptChange={handlePromptChange}
        />
        <VisualizerPane
          data={mockData2}
          modelName="GPT-4"
          selectedPrompt={selectedPrompt}
          onPromptChange={handlePromptChange}
        />
      </div>
    </div>
  );
}
