console.log("Ground control to mayor Tom...");
import _ from "lodash";
import * as d3 from "d3";

function component() {
  /*-------------------------RK-CHART-----------------------------*/
  const start = 0;
  const end = 0;
  const rk_width = 1000;
  const rk_height = 200;

  const rk_chart_data = [
    { x: 0, y: 0 },
    { x: 6.7, y: 1 },
    { x: 8.1, y: 32 },
    { x: 9.5, y: 1 },
    { x: 100, y: 0 }
  ];

  let rk_dataGroup = d3
    .select("svg")
    .append("g")
    .attr("transform", "translate(32,0)")
    .attr("class", "plotArea");

  //Get properties to plot programatically
  // let rk_propertiesNames = [];

  // for (let name in rk_chart_data[0]) {
  //   if (name == "x") {
  //     continue;
  //   }
  //   rk_propertiesNames.push(name);
  //   console.log("Properties", rk_propertiesNames);
  //   console.log(`Property: ${name}`);
  //   console.log("Properties names length: ", rk_propertiesNames.length);
  // }

  //affect prpeorties with colors and plot charts programatically
  // for (let i = 0; i < rk_propertiesNames.length; i++) {
  console.log("Ploting...");
  // rk_plotVariable(rk_chart_data.y, colors[0]);
  // }

  //function rk_plotVariable(y, plotColor) {
  //Draw a line
  let line = d3
    .line() //Returns an svg path
    .x(d => x(d.x))
    .y(d => y(d.y))
    .curve(d3.curveMonotoneX);

  let x = d3
    .scaleLinear()
    .domain(
      d3.extent(rk_chart_data, function(d) {
        return d.x;
      })
    )
    .range([0, rk_width]);

  let y = d3
    .scaleLinear()
    .domain(
      d3.extent(rk_chart_data, function(d) {
        return d.y;
      })
    )
    .range([rk_height, 0]);
  //generate the svg

  let defs = rk_dataGroup.append("defs");
  let gradientVideotron = defs
    .append("linearGradient")
    .attr("id", "gradientVideotron")
    .attr("gradientUnits", "userSpaceOnUse");

  gradientVideotron
    .attr("x1", "500")
    .attr("x2", "500")
    .attr("y1", "-40")
    .attr("y2", "160");
  gradientVideotron
    .append("stop")
    .attr("class", "yellowVideotronStop1")
    .attr("offset", "0.154656")
    .attr("stop-color", "#FFD200");
  gradientVideotron
    .append("stop")
    .attr("class", "yellowVideotronStop2")
    .attr("offset", "0.509935")
    .attr("stop-color", "#FEE803");
  gradientVideotron
    .append("stop")
    .attr("class", "yellowVideotronStop3")
    .attr("offset", "0.900742")
    .attr("stop-color", "#FFD200");

  rk_dataGroup
    .append("path")
    .data([rk_chart_data])
    .attr("fill", "url(#gradientVideotron)")
    .attr("stroke", "red")
    .attr("d", line); //Actual append of the path to the svg
  // }

  /*-------------------------END OF RK-CHART-----------------------------*/

  /*---------------------LINE CHART DEMO------------------------------ 
  const data = [
    { date: "10/25/2018", value1: 1, value2: 0 },
    { date: "10/26/2018", value1: 3, value2: 0 },
    { date: "10/27/2018", value1: 0, value2: 25 },
    { date: "10/28/2018", value1: 0, value2: 62 },
    { date: "10/29/2018", value1: 5, value2: 5 },
    { date: "10/30/2018", value1: 8, value2: 37 },
    { date: "10/31/2018", value1: 7, value2: 12 },
    { date: "11/01/2018", value1: 11, value2: 55 },
    { date: "11/02/2018", value1: 23, value2: 44 },
    { date: "11/03/2018", value1: 13, value2: 53 },
    { date: "11/04/2018", value1: 15, value2: 18 },
    { date: "11/05/2018", value1: 37, value2: 12 },
    { date: "11/06/2018", value1: 32, value2: 60 },
    { date: "11/07/2018", value1: 38, value2: 60 },
    { date: "11/08/2018", value1: 42, value2: 60 },
    { date: "11/09/2018", value1: 43, value2: 3 },
    { date: "11/10/2018", value1: 21, value2: 3 },
    { date: "11/11/2018", value1: 24, value2: 2 },
    { date: "11/12/2018", value1: 50, value2: 15 },
    { date: "11/13/2018", value1: 53, value2: 3 },
    { date: "11/14/2018", value1: 59, value2: 15 },
    { date: "11/15/2018", value1: 61, value2: 3 },
    { date: "11/16/2018", value1: 62, value2: 19 }
  ];

  //--DEMO CHART
  const margin = 50;

  const width = 1024;
  const height = 768;

  let dataGroup = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin)
    .attr("height", height + 2 * margin)
    .append("g")
    .attr("transform", "translate(" + margin + ", " + margin + ")");

  //Parse string dates as object dates
  let parseTime = d3.timeParse("%m/%d/%Y");

  data.forEach(function(d) {
    d.date = parseTime(d.date);
  });

  //scales: adapt the data points to the width and heigth of the chart
  let x = d3
    .scaleTime()
    .domain(
      d3.extent(data, function(d) {
        return d.date;
      })
    ) // INPUT FOR THE SCALING: extend returns the maximun and minimun value in data simultaneusly
    .range([0, width]); //OUTPUT FROM THE SCALING

  let y = d3
    .scaleLinear()
    .domain(
      d3.extent(data, function(d) {
        return d.value1;
      })
    )
    .range([height, 0]); //Remember that the svg canvas 0 is on the upper left corner => invert the order of the paramethers for the  Y axis.

  //Get properties to plot programatically
  let propertiesNames = [];

  for (var name in data[0]) {
    if (name == "date") {
      continue;
    }
    propertiesNames.push(name);
    console.log("Properties", propertiesNames);
    console.log(`Property: ${name}`);
    console.log("Properties names length: ", propertiesNames.length);
  }

  //Make color pallette availablo for programtically plot charts
  //const colors = ["red", "blue", "green"];
  //Using d3 color scale which is an predefined array of hex colors
  const colors = d3.schemeCategory10;
  console.log(`Colors: ${colors}`);

  //affect prpeorties with colors and plot charts programatically
  for (let i = 0; i < propertiesNames.length; i++) {
    console.log("Ploting...");
    plotVariable(propertiesNames[i], colors[i]);
  }

  //generate X axis
  let xAxisGroup = dataGroup //Get yourself a group to draw the x axis and labels
    .append("g")
    .attr("class", "xAxisGroup")
    .attr("transform", `translate(0, ${height})`); //Remember that the svg canvas 0 is on the upper left corner => Move the X axis to the bottom.

  let xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m-%d"));

  xAxis(xAxisGroup);

  //generate Y axis
  let yAxisGroup = dataGroup.append("g").attr("class", "yAxisGroup");
  //.attr("transform", `translate(0, ${height})`)

  let yAxis = d3.axisLeft(y);

  yAxis(yAxisGroup);

  //Drawing lines programatically
  function plotVariable(varibleToPlot, plotColor) {
    //Draw a line
    let line1 = d3
      .line() //Returns an svg path
      .x(d => x(d.date))
      .y(d => y(d[varibleToPlot]));

    //generate the svg
    dataGroup
      .append("path")
      .data([data])
      .attr("fill", "none")
      .attr("stroke", plotColor)
      .attr("d", line1); //Actual append of the path to the svg
  }*/

  return element;
} //end component

document.body.appendChild(component());
