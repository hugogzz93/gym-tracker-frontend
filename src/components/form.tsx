import React, { useState, useEffect, useReducer } from "react";
import gql from "graphql-tag";
import TextInput from "./Inputs/textInput";
import Api from "../lib/services/api";
import { staticDebounce } from "../lib/debounce";
import { Mutation } from "react-apollo";
import mergeByKey from "array-merge-by-key";
import Selectize from "react-select";

const ADD_INTAKE = gql`
  mutation addIntake($input: IntakeInput!) {
    intake {
      create(input: $input) {
        id
      }
    }
  }
`;

function reducer(state, action) {
  switch (action.type) {
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
  <div className="flex--row">
    <div className="t--size-b3">{props.name}</div>
    <TextInput
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      label='grams'
    />
    <Mutation mutation={ADD_INTAKE}>
      {(addIntake, { loading, error }) => (
      <React.Fragment>
        <button
          className="btn"
          onClick={e => {
            e.preventDefault();
            addIntake({
              variables: {
                input: {
                  ndbid: props.id,
                  grams: parseInt(props.value),
                  userId: 1
                }
              }
            });
        }}>
          Submit
        </button>
        {loading && <span>Loading</span>}
        {error && <span>Error</span>}
      </React.Fragment>
      )}
    </Mutation>
  </div>
);

const Form = () => {
  const [state, dispatch] = useReducer(reducer, { selection: [], options: [] });
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchOptions(search, o => dispatch({ type: "setOptions", payload: o }));
  }, [search]);

  return (
    <form className="grid-1">
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

      <div className="col-1">
        {state.selection.map(i => (
          <FoodInput
            key={i.id}
            id={i.id}
            name={i.name}
            value={i.grams}
            onChange={e =>
              dispatch({
                type: "updateSelected",
                payload: { id: i.id, grams: e.target.value }
              })
            }
          />
        ))}
      </div>
    </form>
  );
};

export default Form;
