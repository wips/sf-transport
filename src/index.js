main();

function main() {
  const body = document.body;
  const canvas = document.createElement('svg');
  canvas.setAttribute('width', '600');
  canvas.setAttribute('height', '600');
  canvas.setAttribute('id', 'canvas');
  body.appendChild(canvas);

  const d3Canvas = d3.select("#canvas")
    .append("svg")
    .attr("height", 500)
    .attr("width", 500);
}

function addCanvas() {
  const body = document.body;
  const canvas = document.createElement('svg');
  canvas.setAttribute('width', '600');
  canvas.setAttribute('heght', '600');
  canvas.setAttribute('id', 'canvas');
  body.appendChild(canvas);
}
