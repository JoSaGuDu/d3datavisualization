console.log("Ground control to mayor Tom...");
import _ from "lodash";
import * as d3 from "d3";

function component() {
  let data = [2, 8, 1, 2];

  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  let svg = d3
    .select("body")
    .append("svg")
    .attr("fill", "green")
    .attr("transform", "scale(8)");

  //adjusting position variables
  let deltaX = 15;
  let deltaY = 15;

  let current_x = deltaX;
  let current_y = deltaY;

  //grouping vectors: creating a group of svg
  const gRect = svg.append("g");
  gRect.attr("class", "rectangles");
  const gCirc = svg.append("g");
  gCirc.attr("class", "propCircles");
  data.forEach(value => {
    drawCircle(gCirc, value);
    //current_y = 470;
    drawRectangle(gRect, value);
    //current_y = 490;
    drawPropCircle(gCirc, value);
  });

  function drawCircle(vectorGroup, radius) {
    svg
      .append("circle")
      .attr("fill", "red")
      .attr("r", radius)
      .attr("cx", current_x)
      .attr("cy", current_y);

    current_x += 25;
  }

  // drawCircle(2);
  // drawCircle(8);
  // drawCircle(1);
  // drawCircle(2);

  //Working with a geometry that reflects the real translation from data to shape
  // current_x = 455;
  // current_y = 470;
  function drawRectangle(vecrtorGroup, radius) {
    svg
      .append("rect")
      .attr("fill", "blue")
      .attr("width", 20)
      .attr("height", radius)
      .attr("x", current_x)
      .attr("y", current_y);

    current_x += 25;
  }

  // drawRectangle(2);
  // drawRectangle(8);
  // drawRectangle(1);
  // drawRectangle(2);

  //Working with a proportional geometry area that reflects the real translation from data to shape
  // current_x = 455;
  // current_y = 490;
  function drawPropCircle(vectorGroup, radius) {
    //ppending rectangles to the group better than to the canvas
    vectorGroup
      .append("circle")
      .attr("fill", "purple")
      .attr("r", Math.sqrt(radius))
      .attr("cx", current_x)
      .attr("cy", current_y);

    current_x += 25;
  }

  // drawPropCircle(2);
  // drawPropCircle(8);
  // drawPropCircle(1);
  // drawPropCircle(2);

  return element;
}

document.body.appendChild(component());
