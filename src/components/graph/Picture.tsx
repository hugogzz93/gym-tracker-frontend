import React, { Component } from "react";

export interface Props {
  subtext: string;
  image: string;
}

const Picture = (props: Props) => (
  <div className="content content_picture">
    <div className="content-main-text">
      <i className={props.image} aria-hidden="true" />
    </div>
    <div className="content-sub-text">{props.subtext}</div>
  </div>
);

export default Picture;
