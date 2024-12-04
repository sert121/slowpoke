import { VisualizerData } from '../types';

export const mockData2: VisualizerData = {
  prompts: Array.from({ length: 1000 }, (_, i) => ({
    id: `${i + 1}`,
    text: `Sample prompt ${i + 1}`,
  })),
  promptTokens: Array.from({ length: 1000 }, (_, i) => ({
    [`${i + 1}`]: Array.from({ length: 5 }, (_, j) => ({
      text: `token${j + 1}`,
      logProb: -(Math.random() * 4).toFixed(2), // Random logProb between -3 and 0
      prob: +(Math.random().toFixed(3)), // Random probability between 0 and 1
    })),
  })).reduce((acc, curr) => Object.assign(acc, curr), {}), // Combine all objects
  generations: Array.from({ length: 1000 }, (_, i) => ({
    [`${i + 1}`]: {
      tokens: Array.from({ length: 5 }, (_, j) => ({
        text: `generated${j + 1}`,
        logProb: -(Math.random() * 4).toFixed(2), // Random logProb between -3 and 0
        prob: +(Math.random().toFixed(3)), // Random probability between 0 and 1
      })),
    },
  })).reduce((acc, curr) => Object.assign(acc, curr), {}), // Combine all objects
};
