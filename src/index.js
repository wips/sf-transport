import * as d3 from "d3";

main();

function main() {
  const width = 600;
  const height = 600;
  // addCanvas({ width, height });

  const el = document.createElement('svg');
  el.setAttribute('id', 'canvas');
  document.body.appendChild(el);

  const canvas = d3.select("#canvas")
    .append("svg")
    .attr("height", width)
    .attr("width", height);

  var circle = canvas.append("circle") // Appending shape elements to the SVG element
    .attr("cx", 250)
    .attr("cy", 250)
    .attr("r", 100)
    .attr("fill", "red");
  var rectangle = canvas.append("rect")
    .attr("height", 500).attr("width", 100)
    .attr("fill", "blue")
    .attr("stroke", "blue")
    .attr("stroke-width", 2);
  var line = canvas.append("line")
    .attr("x1", 500).attr("y1", 0)
    .attr("x2", 500).attr("y2", 500)
    .attr("stroke-width", 2)
    .attr("stroke", "black");
}

function addCanvas({ width, height }) {
  const body = document.body;
  const canvas = document.createElement('svg');
  // canvas.setAttribute('width', width);
  // canvas.setAttribute('height', height);
  canvas.setAttribute('id', 'canvas');
  body.appendChild(canvas);
}
