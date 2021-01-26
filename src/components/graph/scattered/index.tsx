import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./index.css";

export interface ScatteredProps {}

export const Scattered: React.FC<ScatteredProps> = (props: ScatteredProps) => {
  const ref = useRef(null);

  useEffect(() => {
    // append the svg object to the body of the page
    var data = [
      [10, 20],
      [20, 100],
      [200, 50],
      [25, 80],
      [10, 200],
      [150, 75],
      [10, 70],
      [30, 150],
      [100, 15],
    ];
    var margin = { top: 50, right: 50, bottom: 50, left: 50 },
      width = window.innerWidth - margin.left - margin.right, // Use the window's width
      height = window.innerHeight - margin.top - margin.bottom - 250; // Use the window's height


    var xScale = d3
      .scaleLinear()
      .domain([0, 20]) // input
      .range([0, width - 250]); // output

    // 6. Y scale will use the randomly generate number
    var yScale = d3
      .scaleLinear()
      .domain([100, 200]) // input
      .range([height, 0]); // output

    var svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return d[0];
      })
      .attr("cy", function (d) {
        return d[1];
      })
      .attr("r", 4);

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag
    svg.append("g").attr("class", "y axis").call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft
  }, []);

  return <svg ref={ref} />;
};
