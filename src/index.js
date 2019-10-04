console.log("Ground control to mayor Tom...");
import _ from "lodash";
import * as d3 from "d3";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  let svg = d3.select("body").append("svg");
  svg
    .append("circle")
    .attr("fill", "red")
    .attr("r", 20)
    .attr("cx", 100)
    .attr("cy", 100);
  svg
    .append("circle")
    .attr("fill", "red")
    .attr("r", 80)
    .attr("cx", 200)
    .attr("cy", 100);
  svg
    .append("circle")
    .attr("fill", "red")
    .attr("r", 10)
    .attr("cx", 300)
    .attr("cy", 100);

  return element;
}

document.body.appendChild(component());
