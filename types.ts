export interface Prompt {
  id: string;
  text: string;
}

export interface Token {
  text: string;
  logProb: number;
  prob: number;
}

export interface Generation {
  tokens: Token[];
}

export interface VisualizerData {
  prompts: Prompt[];
  promptTokens: { [promptId: string]: Token[] };
  generations: { [promptId: string]: Generation };
}

