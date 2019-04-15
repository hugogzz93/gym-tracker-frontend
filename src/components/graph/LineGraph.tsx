import React, { Component } from "react";
import LineChart from "../../lib/d3/LineChart";
import Colors from "./colors";

export interface Props {
  main: string;
  subtext: string;
  suffix: string;
  image: string;
}

class LineGraph extends Component<Props> {
  health(percent: number) {
    if (percent > 0.4) {
      if (percent > 0.8) return Colors.good;
      else return Colors.warning;
    } else return Colors.bad;
  }

  componentDidMount() {
    const lineChart = new LineChart();
    const graphContainer = this.refs.graphContainer;
    lineChart.generate(graphContainer, [0, 4, 2, 1], this.health(0.85));
  }

  render() {
    return (
      <div className="content content-number">
        <div className="content-main-text">
          <span className="content-prefix">
            <i className={this.props.image} aria-hidden="true" />
          </span>
          <span className="content-suffix">{this.props.suffix}</span>
        </div>
        <div className="content-sub-text">{this.props.subtext}</div>
        <div className="content-sub-graph" ref="graphContainer" />
      </div>
    );
  }
}

export default LineGraph;
