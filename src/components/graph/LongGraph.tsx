import React, { Component } from 'react';
import LineGraph from './LineGraph';

export interface Props {
  main: string,
  subtext: string,
  suffix: string,
  image: string,
  consumptions: Array<number>
}

export default class LongGraph extends Component<Props> {
  render() {
    return(
      <div className="content long-bar">
        <div className="content-info">
          <LineGraph 
            main={this.props.main}
            suffix={this.props.suffix}
            subtext={this.props.subtext}
            image={this.props.image}
          />
        </div>
        <div className="content-chart">
        </div>
      </div>
    )
  }
}
