export function getColorForProbability(probability: number, isBackground: boolean = false): string {
  const normalizedProb = Math.max(0, Math.min(1, probability));
  
  const yellow = isBackground ? [255, 255, 200] : [255, 204, 0];
  const orange = isBackground ? [255, 229, 204] : [255, 128, 0];
  const red = isBackground ? [255, 204, 204] : [204, 0, 0];
  
  let r, g, b;
  
  if (normalizedProb < 0.5) {
    const t = normalizedProb * 2;
    r = Math.round(yellow[0] + t * (orange[0] - yellow[0]));
    g = Math.round(yellow[1] + t * (orange[1] - yellow[1]));
    b = Math.round(yellow[2] + t * (orange[2] - yellow[2]));
  } else {
    const t = (normalizedProb - 0.5) * 2;
    r = Math.round(orange[0] + t * (red[0] - orange[0]));
    g = Math.round(orange[1] + t * (red[1] - orange[1]));
    b = Math.round(orange[2] + t * (red[2] - orange[2]));
  }
  
  return `rgb(${r}, ${g}, ${b})`;
}

