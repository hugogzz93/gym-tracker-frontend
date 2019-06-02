import React, { useEffect, useState } from "react";
import { Mutation } from "react-apollo";
import Widget from "./graph/Widget";
import Input from './Inputs/textInput'
import gql from "graphql-tag.macro";
import CircleGraph from "./graph/CircleGraph";
import { ITNutrient } from '../constants/types';

const UPDATE_NUTRIENT_GOAL = gql`
  mutation updateNutrientGoal(
    $nutrientId: ID!
    $input: NutrientIntakeGoalInput!
  ) {
    nutrientIntakeGoal(nutrientId: $nutrientId) {
      update(input: $input) {
        id
        value
      }
    }
  }
`;

interface NutrientProps {
  col: number;
  main: string;
  subtext: string;
  nutrient: ITNutrient;
  theme?: string;
  goal: number;
  intake: number;
}

const getPercent = (current , goal) => parseFloat((current / goal).toFixed(2))

const NutrientWidget = (props: NutrientProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(props.goal || 0);
  const [goal, setGoal] = useState(props.goal);

  useEffect(() => setGoal(props.goal), [props.goal]);


  if (isEditing)
    return (
      <Widget className="nutrient-widget" col={props.col} theme={props.theme || "dark"}>
        <div className="widget__toolbar card card--no-bg grid-4">
          <div className="col-3"/>
          <i className="clickable t--gray col-1 fas fa-times" onClick={() => setIsEditing(false)}></i>
        </div>
        <Mutation mutation={UPDATE_NUTRIENT_GOAL} onCompleted={ data =>  {
          setGoal(data.nutrientIntakeGoal.update.value)
          setIsEditing(false)
          } }>
          {(updateGoal, { data, loading, error }) => {
            if(loading) <div className="t--b3">loading</div>
            return (
              <form className="flex--col flex--centered" style={{height: '60%'}}>
                  <Input 
                    name={`${props.nutrient.nutrientId}`}
                    type="number"
                    value={inputValue}
                    label={props.nutrient.unit}
                    onChange={e => setInputValue(parseInt(e.target.value))}
                  />
                <div className="button" onClick={e =>
                  updateGoal({
                    variables: {
                      nutrientId: props.nutrient.nutrientId,
                      input: {
                        value: inputValue
                      }
                    }
                  })
                }>Update Goal</div>
              </form>
            );
          }}
        </Mutation>
      </Widget>
    );
  else
    return (
      <Widget col={props.col} theme={props.theme || "dark"} className={'nutrient-widget'}>
        <div className="widget__toolbar card card--no-bg grid-4">
          <div className="col-3"/>
          <i className="clickable t--gray col-1 fas fa-cog" onClick={() => setIsEditing(true)}></i>
        </div>
        <CircleGraph {...props} percent={getPercent(props.intake, goal)} />
      </Widget>
    );
};

export default NutrientWidget;
