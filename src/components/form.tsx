import React, { useState, useEffect, useReducer } from "react";
import gql from "graphql-tag.macro";
import TextInput from "./Inputs/textInput";
import Api from "../lib/services/api";
import { staticDebounce } from "../lib/debounce";
import { Mutation } from "react-apollo";
import mergeByKey from "array-merge-by-key";
import Selectize from "react-select";
import { SessionContext } from "../App";

const ADD_INTAKE = gql`
  mutation addIntake($input: IntakeInput!) {
    intake {
      create(input: $input) {
        id
      }
    }
  }
`;

const ADD_NUTRIENT = gql`
  mutation addNutrient($input: NutrientIntakeInput!) {
    nutrientIntake {
      create(input: $input) {
        value
      }
    }
  }
`;

const CREATE_INTAKES = gql`
  mutation createIntakes($inputs: [IntakeInput!]!) {
    intake {
      batchCreate(inputs: $inputs) {
        id
      }
    }
  }
`;

function reducer(state, action) {
  switch (action.type) {
    case "reset": {
      return { ...state, options: [], selection: [] };
    }
    case "setOptions": {
      return { ...state, options: action.payload };
    }
    case "addSelection": {
      return {
        ...state,
        selection: mergeByKey("id", state.selection, [
          { ...{ grams: 0 }, ...action.payload }
        ])
      };
    }
    case "removeSelection": {
      return {
        ...state,
        selection: state.selection.filter(i => i.id != action.payload)
      };
    }
    case "updateSelected": {
      return {
        ...state,
        selection: state.selection.map(s =>
          s.id == action.payload.id ? { ...s, ...action.payload } : s
        )
      };
    }
    case "updateCalories": {
      return {
        ...state,
        calories: action.payload
      };
    }
    case "updateWater": {
      return {
        ...state,
        water: action.payload
      };
    }
    case "updateProtein": {
      return {
        ...state,
        protein: action.payload
      };
    }
  }
}

const fetchOptions = staticDebounce(
  (name: string, fn: (object) => never) => Api.search(name).then(fn),
  500
);

const FoodInput = (props: {
  id: number;
  name: string;
  value: string;
  onChange: (any) => any;
}) => (
  <TextInput
    value={props.value}
    onChange={props.onChange}
    name={props.name}
    label={props.name}
  />
);

const Form = (props: { active: boolean; close: (e: object) => void }) => {
  const [state, dispatch] = useReducer(reducer, {
    selection: [],
    options: [],
    calories: 0,
    protein: 0
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchOptions(search, o => dispatch({ type: "setOptions", payload: o }));
  }, [search]);

  return (
    <form id="intakeForm" className={`grid-1 ${props.active ? "active" : ""}`}>
      <div className="col-1 flex--row flex--justify-end">
        <i className="fas fa-times" onClick={props.close} />
      </div>
      <div className="col-1">
        <Selectize
          value={null}
          options={state.options.map(e => ({
            value: e.id,
            label: e.name,
            data: e
          }))}
          onChange={e => dispatch({ type: "addSelection", payload: e.data })}
          onInputChange={input => setSearch(input)}
        />
      </div>

      <Mutation
        mutation={CREATE_INTAKES}
        onCompleted={() => dispatch({ type: "reset" })}
      >
        {(createIntakes, { data, loading, error }) => {
          if (error) return <div>Error</div>;
          if (loading) return <div>Loading</div>;
          return (
            <div className="col-1">
              {state.selection.map(i => (
                <TextInput
                  key={i.id}
                  name={i.name}
                  value={i.grams}
                  label={i.name}
                  onChange={e =>
                    dispatch({
                      type: "updateSelected",
                      payload: { id: i.id, grams: e.target.value }
                    })
                  }
                />
              ))}
              <SessionContext.Consumer>
                {({ userId }) => (
                  <div
                    className="button"
                    onClick={() =>
                      createIntakes({
                        variables: {
                          inputs: state.selection.map(i => ({
                            userId,
                            ndbid: i.id,
                            grams: parseInt(i.grams),
                            name: i.name
                          }))
                        }
                      })
                    }
                  >
                    Submit
                  </div>
                )}
              </SessionContext.Consumer>
            </div>
          );
        }}
      </Mutation>
      <SessionContext.Consumer>
      {({userId}) => (
        <div className='col-1'>
        <Mutation mutation={ADD_NUTRIENT}>
          {(addNutrient, { loading, error }) => (
            <React.Fragment>
              <TextInput
                value={state.calories}
                onChange={e =>
                  dispatch({ type: "updateCalories", payload: e.target.value })
                }
                name="calories"
                label="Add Calories"
              />
              <button
                onClick={e => {
                  e.preventDefault();
                  addNutrient({
                    variables: {
                      input: {
                        nutrientId: "208",
                        value: parseFloat(state.calories),
                        userId
                      }
                    }
                  });
                }}
              >
                Submit
              </button>
            </React.Fragment>
          )}
        </Mutation>
        <Mutation mutation={ADD_NUTRIENT}>
          {(addNutrient, { loading, error }) => (
            <React.Fragment>
              <TextInput
                value={state.water}
                onChange={e =>
                  dispatch({ type: "updateWater", payload: e.target.value })
                }
                name="Water"
                label="Add Water"
              />
              <button
                onClick={e => {
                  e.preventDefault();
                  addNutrient({
                    variables: {
                      input: {
                        nutrientId: "255",
                        value: parseFloat(state.water),
                        userId
                      }
                    }
                  });
                  dispatch({ type: "updateWater", payload: 0 });
                }}
              >
                Submit
              </button>
              {loading && <span>Loading</span>}
              {error && <span>Error</span>}
            </React.Fragment>
          )}
        </Mutation>
        <Mutation mutation={ADD_NUTRIENT}>
          {(addNutrient, { loading, error }) => (
            <React.Fragment>
              <TextInput
                value={state.protein}
                onChange={e =>
                  dispatch({ type: "updateProtein", payload: e.target.value })
                }
                name="Protein"
                label="Add Protein"
              />
              <button
                onClick={e => {
                  e.preventDefault();
                  addNutrient({
                    variables: {
                      input: {
                        nutrientId: "203",
                        value: parseFloat(state.protein),
                        userId
                      }
                    }
                  });
                  dispatch({ type: "updateProtein", payload: 0 });
                }}
              >
                Submit
              </button>
              {loading && <span>Loading</span>}
              {error && <span>Error</span>}
            </React.Fragment>
          )}
        </Mutation>
        </div>
      )}
      </SessionContext.Consumer>
    </form>
  );
};

export default Form;
