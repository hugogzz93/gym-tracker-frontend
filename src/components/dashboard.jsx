import React, { Component } from "react";

import CircleGraph from "./graph/CircleGraph";
import LineGraph from "./graph/LineGraph";
import LongGraph from "./graph/LongGraph";
import Number from "./graph/Number";
import Picture from "./graph/Picture";
import Widget from "./graph/Widget";
import NutrientWidget from "./NutrientWidget.tsx";
import Nutrients from '../constants/nutrientIds'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.goals = {}
    this.props.data.nutrientIntakeGoals.forEach(e => this.goals[e.nutrientId] = e)
    this.intakes = {}
    this.props.data.totalIntake.forEach(e => this.intakes[e.nutrientId] = e)
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
        data: getSequence(4, 40, 80)
      },
      {
        col: 3,
        image: "fa fa-heartbeat",
        main: "78",
        suffix: "%",
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

    const getValue = (intake) => intake ? intake.value : 0;

    const CircleGraphs = [
      {
        col: 3,
        main: "Protein",
        subtext: "",
        nutrient: Nutrients.Protein,
        goal: getValue(this.goals[Nutrients.Protein.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Protein.nutrientId]),
      },
      {
        col: 3,
        main: "Calories",
        subtext: "",
        nutrient: Nutrients.Energy,
        goal: getValue(this.goals[Nutrients.Energy.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Energy.nutrientId]),
      },
      {
        col: 2,
        main: "Mg",
        subtext: "STRENGHT",
        nutrient: Nutrients.Magnesium,
        goal: getValue(this.goals[Nutrients.Magnesium.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Magnesium.nutrientId]),
      },
      {
        col: 2,
        main: "Zn",
        subtext: "MUSCLES",
        nutrient: Nutrients.Zinc,
        goal: getValue(this.goals[Nutrients.Zinc.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Zinc.nutrientId]),
      },
      {
        col: 2,
        main: "H20",
        subtext: "GENERAL",
        nutrient: Nutrients.Water,
        goal: getValue(this.goals[Nutrients.Water.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Water.nutrientId]),
      },
      {
        col: 2,
        main: "Ca",
        subtext: "BONES & TEETH",
        nutrient: Nutrients.Calcium,
        goal: getValue(this.goals[Nutrients.Calcium.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Calcium.nutrientId]),
      },
      {
        col: 2,
        main: "K",
        subtext: "BlOOD PRESSURE",
        nutrient: Nutrients.Potassium,
        goal: getValue(this.goals[Nutrients.Potassium.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Potassium.nutrientId]),
      },
      {
        col: 2,
        main: "Fe",
        subtext: "OXYGEN",
        nutrient: Nutrients.Iron,
        goal: getValue(this.goals[Nutrients.Iron.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Iron.nutrientId]),
      },
      {
        col: 2,
        main: "A",
        subtext: "SKIN",
        nutrient: Nutrients.VitaminA_RAE,
        goal: getValue(this.goals[Nutrients.VitaminA_RAE.nutrientId]),
        intake: getValue(this.intakes[Nutrients.VitaminA_RAE.nutrientId]),
      },
      {
        col: 2,
        main: "B1",
        subtext: "ENERGY",
        nutrient: Nutrients.Thiamin,
        goal: getValue(this.goals[Nutrients.Thiamin.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Thiamin.nutrientId]),
      },
      {
        col: 2,
        main: "B2",
        subtext: "TISSUES",
        nutrient: Nutrients.Riboflavin,
        goal: getValue(this.goals[Nutrients.Riboflavin.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Riboflavin.nutrientId]),
      },
      {
        col: 2,
        main: "B6",
        subtext: "NERVOUS/ENERGY",
        nutrient: Nutrients.VitaminB6,
        goal: getValue(this.goals[Nutrients.VitaminB6.nutrientId]),
        intake: getValue(this.intakes[Nutrients.VitaminB6.nutrientId]),
      },
      {
        col: 2,
        main: "B12",
        subtext: "NERVOUS SYSTEM",
        nutrient: Nutrients.VitaminB12,
        goal: getValue(this.goals[Nutrients.VitaminB12.nutrientId]),
        intake: getValue(this.intakes[Nutrients.VitaminB12.nutrientId]),
      },
      {
        col: 2,
        main: "C",
        subtext: "GROWTH HORMONE",
        nutrient: Nutrients.VitaminC,
        goal: getValue(this.goals[Nutrients.VitaminC.nutrientId]),
        intake: getValue(this.intakes[Nutrients.VitaminC.nutrientId]),
      },
      {
        col: 2,
        main: "D",
        subtext: "TEETH & BONES",
        nutrient: Nutrients.VitaminC,
        goal: getValue(this.goals[Nutrients.VitaminC.nutrientId]),
        intake: getValue(this.intakes[Nutrients.VitaminC.nutrientId]),
      },
      {
        col: 2,
        main: "E",
        subtext: "CELL PROTECTION",
        nutrient: Nutrients.VitaminE,
        goal: getValue(this.goals[Nutrients.VitaminE.nutrientId]),
        intake: getValue(this.intakes[Nutrients.VitaminE.nutrientId]),
      },
      {
        col: 2,
        main: "Vit K",
        subtext: "INFLAMMATION",
        nutrient: Nutrients.VitaminE,
        goal: getValue(this.goals[Nutrients.VitaminE.nutrientId]),
        intake: getValue(this.intakes[Nutrients.VitaminE.nutrientId]),
      },
      {
        col: 2,
        main: "FOLATE",
        subtext: "ABSORBTION",
        nutrient: Nutrients.Folate,
        goal: getValue(this.goals[Nutrients.Folate.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Folate.nutrientId]),
      },
      {
        col: 2,
        main: "Gl",
        subtext: "ENERGY",
        nutrient: Nutrients.Folate,
        goal: getValue(this.goals[Nutrients.Folate.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Folate.nutrientId]),
      },
      {
        col: 2,
        main: "Chol",
        subtext: "ABSORBTION",
        nutrient: Nutrients.Cholesterol,
        goal: getValue(this.goals[Nutrients.Cholesterol.nutrientId]),
        intake: getValue(this.intakes[Nutrients.Cholesterol.nutrientId]),
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
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[2]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[3]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[4]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[5]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[6]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[7]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[8]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[9]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[10]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[11]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[12]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[13]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[14]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[15]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[16]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[17]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[18]}/>
        <NutrientWidget col={2} theme="dark" {...CircleGraphs[19]}/>
      </div>
    );
  }
}

export default Dashboard;
