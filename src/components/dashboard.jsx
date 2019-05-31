import React, { Component } from "react";

import CircleGraph from "./graph/CircleGraph";
import LineGraph from "./graph/LineGraph";
import LongGraph from "./graph/LongGraph";
import Number from "./graph/Number";
import Picture from "./graph/Picture";
import Widget from "./graph/Widget";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.getPercent = this.getPercent.bind(this);
  }

  getPercent(id, target) {
    const nutrient = this.props.data.find(e => e.nutrientId == id);
    const value = nutrient ? nutrient.value : 0;
    return parseFloat((value / target).toFixed(2));
  }

  render() {
    const CaloricConsumption = {
      image: "fa fa-user",
      main: "5,869,724",
      suffix: "kcal",
      subtext: "TOTAL ENG. CONSUMPTION",
      consumptions: []
    };
    const ContentNumbers = [
      {
        image: "fa fa-thermomenter-empty",
        main: "48",
        suffix: "bpm",
        subtext: "TEMPERATURE",
        col: 4
      }
    ];
    const ContentPictures = [
      { col: 2, image: "fab fa-xing", subtext: "PHOTOSYNTHESIS" },
      { col: 2, image: "fas fa-bolt", subtext: "GLYCOLISIS" },
      { col: 2, image: "fas fa-stethoscope", subtext: "RESPIRATION" },
      { col: 2, image: "fab fa-dribbble", subtext: "CHEMOSYNTH" }
    ];

    const getSequence = (num, min, max) =>
      Array(num)
        .fill(0)
        .map(n => parseFloat((Math.random() * (max - min) + min).toFixed(0)));

    const ContentLineGraphs = [
      {
        col: 3,
        image: "fa fa-thermometer-empty",
        main: "48",
        suffix: "%",
        subtext: "MUSCLE PERCENTAGE",
        data: getSequence(4, 40, 80)
      },
      {
        col: 3,
        image: "fa fa-heartbeat",
        main: "78",
        suffix: "%",
        subtext: "WATER PERCENTAGE",
        data: getSequence(4, 40, 80)
      },
      {
        col: 3,
        image: "fa fa-cuttlery",
        main: "65",
        suffix: "kg",
        subtext: "BODY WEIGHT",
        data: getSequence(4, 40, 80)
      },
      {
        col: 3,
        image: "fa fa-user",
        main: "16",
        suffix: "%",
        subtext: "FAT PERCENTAGE",
        data: getSequence(4, 40, 80)
      },
      {
        col: 3,
        image: "fa fa-database",
        main: "680",
        suffix: "kcal",
        subtext: "AVG. CONSUMPTION",
        data: getSequence(4, 40, 80)
      },
      {
        col: 3,
        image: "fa fa-clock-o",
        main: "7",
        suffix: "Hrs",
        subtext: "SLEEP",
        data: getSequence(4, 40, 80)
      }
    ];

    const CircleGraphs = [
      {
        col: 3,
        main: "Protein",
        subtext: "",
        percent: this.getPercent("203", 75)
      },
      {
        col: 3,
        main: "Calories",
        subtext: "",
        percent: this.getPercent("208", 3200)
      },
      {
        col: 2,
        main: "Mg",
        subtext: "STRENGHT",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "Zn",
        subtext: "MUSCLES",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "H20",
        subtext: "GENERAL",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "Ca",
        subtext: "BONES & TEETH",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "K",
        subtext: "BlOOD PRESSURE",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "Fe",
        subtext: "OXYGEN",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "A",
        subtext: "SKIN",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "B1",
        subtext: "ENERGY",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "B2",
        subtext: "TISSUES",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "B6",
        subtext: "NERVOUS/ENERGY",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "B12",
        subtext: "NERVOUS SYSTEM",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "C",
        subtext: "GROWTH HORMONE",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "D",
        subtext: "TEETH & BONES",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "E",
        subtext: "CELL PROTECTION",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "Vit K",
        subtext: "INFLAMMATION",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "FOLATE",
        subtext: "ABSORBTION",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "Gl",
        subtext: "ENERGY",
        percent: Math.random(0, 100).toFixed(2)
      },
      {
        col: 2,
        main: "Chol",
        subtext: "ABSORBTION",
        percent: Math.random(0, 100).toFixed(2)
      }
    ];

    return (
      <div className="dashboard grid-12 gap-0">
        <Widget col={4} theme="dark">
          <Number {...ContentNumbers[0]} />
        </Widget>
        <Widget col={2} theme="light">
          <Picture {...ContentPictures[0]} />
        </Widget>
        <Widget col={2} theme="light">
          <Picture {...ContentPictures[1]} />
        </Widget>
        <Widget col={2} theme="light">
          <Picture {...ContentPictures[2]} />
        </Widget>
        <Widget col={2} theme="dark">
          <Picture {...ContentPictures[3]} />
        </Widget>
        <Widget col={3} theme="dark">
          <LineGraph {...ContentLineGraphs[0]} />
        </Widget>
        <Widget col={3} theme="dark">
          <LineGraph {...ContentLineGraphs[1]} />
        </Widget>
        <Widget col={3} theme="dark">
          <CircleGraph {...CircleGraphs[0]} />
        </Widget>
        <Widget col={3} theme="dark">
          <CircleGraph {...CircleGraphs[1]} />
        </Widget>
        <Widget col={3} theme="dark">
          <LineGraph {...ContentLineGraphs[2]} />
        </Widget>
        <Widget col={3} theme="dark">
          <LineGraph {...ContentLineGraphs[3]} />
        </Widget>
        <Widget col={3} theme="light">
          <LineGraph {...ContentLineGraphs[4]} />
        </Widget>
        <Widget col={3} theme="dark">
          <LineGraph {...ContentLineGraphs[5]} />
        </Widget>
        <Widget col={12} theme="light">
          <LongGraph {...CaloricConsumption} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[2]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[3]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[4]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[5]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[6]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[7]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[8]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[9]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[10]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[11]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[12]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[13]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[14]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[15]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[16]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[17]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[18]} />
        </Widget>
        <Widget col={2} theme="dark">
          <CircleGraph {...CircleGraphs[19]} />
        </Widget>
      </div>
    );
  }
}

export default Dashboard;
