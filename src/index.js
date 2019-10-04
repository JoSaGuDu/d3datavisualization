console.log("Ground control to mayor Tom...");
import _ from "lodash";
import * as d3 from "d3";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  let svg = d3.select("body").append("svg");

  let current_x = 100;
  let current_y = 100;
  function drawCircle(radius) {
    svg
      .append("circle")
      .attr("fill", "red")
      .attr("r", radius * 10)
      .attr("cx", current_x)
      .attr("cy", current_y);

    current_x += 100;
  }

  drawCircle(2);
  drawCircle(8);
  drawCircle(1);
  drawCircle(2);

  return element;
}

document.body.appendChild(component());
