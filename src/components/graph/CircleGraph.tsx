import React, { Component } from "react";
import CircleChart from "../../lib/d3/CircleChart";
import Colors from "./colors";

export interface Props {
  main: string;
  subtext: string;
  col: number;
  percent?: number;
}

class CircleGraph extends Component<Props> {
  health(percent: number) {
    if (percent > 0.4) {
      if (percent > 0.8) return Colors.good;
      else return Colors.warning;
    } else return Colors.bad;
  }
  componentDidMount() {
    const circleGraph = new CircleChart();
    const graphContainer = this.refs.graphContainer;
    const percent = this.props.percent || 0.85;
    circleGraph.generate(graphContainer, percent, this.health(percent));
  }

  render() {
    return (
      <div className="content content-circle">
        <div className="content-main-graph" ref="graphContainer" />
        <div className="content-main-text">
          <span className="content-accent">{this.props.main}</span>
        </div>
        <div className="content-sub-text">{this.props.subtext}</div>
      </div>
    );
  }
}

export default CircleGraph;
