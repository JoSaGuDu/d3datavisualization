console.log("Ground control to mayor Tom...");
import _ from "lodash";
import * as d3 from "d3";

function component() {
  /*----------------------------FIRST DEMO---------------
      // let data = [2, 8, 1, 2];

      // const element = document.createElement("div");
      // element.innerHTML = _.join(["Hello", "webpack"], " ");

      // let svg = d3
      //   .select("body")
      //   .append("svg")
      //   .attr("fill", "green")
      //   .attr("transform", "scale(8)");

      // //adjusting position variables
      // let deltaX = 15;
      // let deltaY = 15;

      // let current_x = deltaX;
      // let current_y = deltaY;

      // //grouping vectors: creating a group of svg
      // const gRect = svg.append("g");
      // gRect.attr("class", "rectangles");
      // const gCirc = svg.append("g");
      // gCirc.attr("class", "propCircles");

      // //Draw
      // data.forEach(value => {
      //   drawCircle(gCirc, value);
      //   //current_y = 470;
      //   drawRectangle(gRect, value);
      //   //current_y = 490;
      //   drawPropCircle(gCirc, value);
      // });

      // function drawCircle(vectorGroup, radius) {
      //   svg
      //     .append("circle")
      //     .attr("fill", "red")
      //     .attr("r", radius)
      //     .attr("cx", current_x)
      //     .attr("cy", current_y);

      //   current_x += 25;
      // }

      // // drawCircle(2);
      // // drawCircle(8);
      // // drawCircle(1);
      // // drawCircle(2);

      // //Working with a geometry that reflects the real translation from data to shape
      // // current_x = 455;
      // // current_y = 470;
      // function drawRectangle(vecrtorGroup, radius) {
      //   svg
      //     .append("rect")
      //     .attr("fill", "blue")
      //     .attr("width", 20)
      //     .attr("height", radius)
      //     .attr("x", current_x)
      //     .attr("y", current_y);

      //   current_x += 25;
      // }

      // // drawRectangle(2);
      // // drawRectangle(8);
      // // drawRectangle(1);
      // // drawRectangle(2);

      // //Working with a proportional geometry area that reflects the real translation from data to shape
      // // current_x = 455;
      // // current_y = 490;
      // function drawPropCircle(vectorGroup, radius) {
      //   //ppending rectangles to the group better than to the canvas
      //   vectorGroup
      //     .append("circle")
      //     .attr("fill", "purple")
      //     .attr("r", Math.sqrt(radius))
      //     .attr("cx", current_x)
      //     .attr("cy", current_y);

      //   current_x += 25;
      // }

      // // drawPropCircle(2);
      // // drawPropCircle(8);
      // // drawPropCircle(1);
      // // drawPropCircle(2);


  --------------------END OF FIRST DEMO-------------------------*/
  /*---------------------LINE CHART------------------------------ */
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

  //Drawing lines programatically

  //Draw a line
  let line1 = d3
    .line() //Returns an svg path
    .x(d => x(d.date))
    .y(d => y(d.value1));

  //generate the svg
  dataGroup
    .append("path")
    .data([data])
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("d", line1); //Actual append of the path to the svg

  //Draw a line
  let line2 = d3
    .line() //Returns an svg path
    .x(d => x(d.date))
    .y(d => y(d.value2));

  //generate the svg
  dataGroup
    .append("path")
    .data([data])
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("d", line2); //Actual append of the path to the svg

  //Parse string dates as object dates
  let parseTime = d3.timeParse("%m/%d/%Y");

  data.forEach(function(d) {
    d.date = parseTime(d.date);
  });

  //let dataDatesParsed = data.map(d => parseTime(d.date));

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

  //generate X axis
  let xAxisGroup = dataGroup //Get yourself a gropu to draw the x axis and labels
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

  return element;
}

document.body.appendChild(component());
