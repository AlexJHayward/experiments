function spawnBubble(color, index) {
  var divElement = document.createElement("Div");
  divElement.classList.add('bubble');
  divElement.style.background = color;
  divElement.style.zIndex = index;
  divElement.style.rotate = (index * -1) * 30 + 'deg';

  document.getElementsByClassName("gradient-pic-container")[0].appendChild(divElement);
}

function bubbles(colors) {
  colors.map(function(color) {
    colorIndex = colors.indexOf(color);
    zIndex = (colorIndex * -1) - 1;
    spawnBubble(color, zIndex);
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const colors = [
    "#cdb4db",
    "#ffc8dd",
    "#ffafcc",
    "#bde0fe",
    "#a2d2ff"
  ];

  const rgb = [
    "red",
    "green",
    "blue"
  ]

  bubbles(colors);
});
