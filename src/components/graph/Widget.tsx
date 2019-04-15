import React, { Component } from "react";

export interface Props {
  col: number;
  theme: string;
  children: Object;
}

const Widget = (props: Props) => (
  <div className={`widget col-${props.col} ${props.theme}`}>
    {props.children}
  </div>
);

export default Widget;
