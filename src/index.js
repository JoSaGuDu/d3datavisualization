console.log("Ground control to mayor Tom...");
import _ from "lodash";
import * as d3 from "d3";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  let svg = d3
    .select("body")
    .append("svg")
    .attr("fill", "green")
    .attr("transform", "scale(8)");

  let current_x = 455;
  let current_y = 455;
  function drawCircle(radius) {
    svg
      .append("circle")
      .attr("fill", "red")
      .attr("r", radius)
      .attr("cx", current_x)
      .attr("cy", current_y);

    current_x += 25;
  }

  drawCircle(2);
  drawCircle(8);
  drawCircle(1);
  drawCircle(2);

  //Working with a geometry that reflects the real translation from data to shape
  current_x = 455;
  current_y = 470;
  function drawRectangle(radius) {
    svg
      .append("rect")
      .attr("fill", "blue")
      .attr("width", 20)
      .attr("height", radius)
      .attr("x", current_x)
      .attr("y", current_y);

    current_x += 25;
  }

  drawRectangle(2);
  drawRectangle(8);
  drawRectangle(1);
  drawRectangle(2);

  //Working with a proportional geometry area that reflects the real translation from data to shape
  current_x = 455;
  current_y = 490;
  function drawPropCircle(radius) {
    svg
      .append("circle")
      .attr("fill", "purple")
      .attr("r", Math.sqrt(radius))
      .attr("cx", current_x)
      .attr("cy", current_y);

    current_x += 25;
  }

  drawPropCircle(2);
  drawPropCircle(8);
  drawPropCircle(1);
  drawPropCircle(2);

  return element;
}

document.body.appendChild(component());
