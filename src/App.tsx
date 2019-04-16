import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/app.sass";
import Dashboard from "./components/dashboard";
import Form from "./components/form";
import { Query } from 'react-apollo';
import gql from 'graphql-tag.macro';

const GET_CONSUMPTION = gql`
query getConsumption($query: UserQuery ) {
  users(query: $query) {
    totalIntake {
      name
      nutrientId
      unit
      value
    }
  }
}`




const App = () => {
  return (
    <div className="App">
      <Form />
      <div className="container--80">
        <Query query={GET_CONSUMPTION} variables={{query: {id: 1}}}>
          {({data, loading, error}) => {
            if(loading) return <span>loading</span>
            if(error) return <span>error</span>
            return <Dashboard data={data.users[0].totalIntake}/>
          }}
        </Query>
      </div>
    </div>
  );
}
export default App;
