import React, { Component } from 'react';
import LineGraph from './LineGraph';

export interface Props {
  main: string,
  subtext: string,
  suffix: string,
  image: string,
}

const Number = (props: Props) => (
  <div className="content content-number">
    <div className="content-main-text">
      <span className="content-prefix">
        <i className={props.image} aria-hidden="true"/>
      </span>
      <span className="content-accent">
        {props.main}
      </span>
      <span className="content-suffix">
        {props.suffix}
      </span>
    </div>
    <div className="content-sub-text">
      {props.subtext}
    </div>
  </div>
)
export default Number;
