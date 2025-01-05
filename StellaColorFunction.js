//The Stella Color Function picks random colors
//out of a randomly chosen palette
//based around a random hue.
//(This code chooses random saturation and lightness, too)

function stellaColorFunction(count) {
  // Generate a random base hue (0 to 360)
  const baseHue = Math.floor(Math.random() * 360);

  // Generate a random range for the palette (10 to 360 degrees)
  const range = Math.floor(Math.random() * 351) + 10; // Ensures at least a 10-degree range

  // Generate the colors
  const palette = [];
  for (let i = 0; i < count; i++) {
    // Choose a random hue within the range
    const hue = (baseHue + Math.random() * range) % 360;

    // Random saturation and lightness for variety
    const saturation = Math.random() * 50 + 50; // 50% to 100%
    const lightness = Math.random() * 30 + 40; // 40% to 70%

    // Construct HSL color string
    const color = `hsl(${hue.toFixed(0)}, ${saturation.toFixed(0)}%, ${lightness.toFixed(0)}%)`;
    palette.push(color);
  }

  return palette;
}

// Example usage: Generate a palette of 5 colors
const colors = stellaColorFunction(5);
console.log(colors);


