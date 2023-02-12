export const getRandomColor = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var brightness = (r + g + b) / 3;
  var colorCode = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  return {
    brightness: brightness,
    colorCode: colorCode,
  };
};
