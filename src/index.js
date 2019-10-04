console.log('Ground control to mayor Tom...');
import _ from 'lodash';
import * as d3 from 'd3';

function component() 
{
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    d3.select("body")
    .append("svg")
    .append("text")
    .text("Hello 3d")
    .attr("x", "100")
    .attr("y", "100")
    ;

    return element;


}

document.body.appendChild(component());