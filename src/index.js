import * as d3 from 'd3';
const arteries = require('./sfmaps/arteries.json');

main();

function main() {
  const width = 600;
  const height = 600;
  const svg = getCanvas(width, height);
  const { xs, ys } = getScales(width, height);

  svg.append("path")
    .datum({type: "FeatureCollection", features: arteries.features})
    .attr("d", d3.geoPath().projection(d3.geoMercator()))
    .attr("style", 'color: red');

  // const lineFunction = d3.svg.line()
  //   .x(([x]) => x)
  //   .y(([, y]) => y)
  //   .interpolate("linear");
  // getArteriesLines().forEach(artery => {
  //   svg.append("path")
  //     .attr("d", lineFunction(artery));
  // });

}

function getScales(width, height) {
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(getArteriesDots(), ([x]) => x)])
    .range([0, width]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(getArteriesDots(), ([, y]) => y)])
    .range([height, 0]);

  return { xs: xScale, ys: yScale };
}

function getCanvas(width, height) {
  const id = addCanvas();
  return d3.select(`#${id}`)
    .append("svg")
    .attr("height", width)
    .attr("width", height);
}

function getArteriesLines() {
  return arteries.features
    .map(({ geometry }) => geometry.coordinates.map(([x, y]) => [x, y]));
}

function getArteriesDots() {
  return getArteriesLines()
    .reduce((acc, line) => [...acc, ...line], []);
}

function addCanvas() {
  const el = document.createElement('div');
  const id = 'canvas';
  el.setAttribute('id', id);
  document.body.appendChild(el);
  return id;
}
