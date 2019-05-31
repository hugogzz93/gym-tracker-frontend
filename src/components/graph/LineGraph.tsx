import React, { Component } from "react";
import LineChart from "../../lib/d3/LineChart";
import Colors from "./colors";

export interface Props {
  main: string;
  subtext: string;
  suffix: string;
  image: string;
  data?: Array<number>;
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
    const data = this.props.data || [0, 4, 2, 1]
    lineChart.generate(graphContainer, data, this.health(data[data.length - 1]));
  }

  render() {
    return (
      <div className="content content-number">
        <div className="content-main-text flex--row flex--align-center">
          <span className="content-prefix">
            <i className={this.props.image} aria-hidden="true" />
          </span>
          <div className="content-accent">{this.props.main}</div>
          <span className="content-suffix">{this.props.suffix}</span>
        </div>
        <div className="content-sub-text">{this.props.subtext}</div>
        <div className="content-sub-graph" ref="graphContainer" />
      </div>
    );
  }
}

export default LineGraph;
