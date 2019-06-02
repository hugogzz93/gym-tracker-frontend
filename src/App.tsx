import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/app.sass";
import Dashboard from "./components/dashboard";
import Form from "./components/form";
import { Query } from "react-apollo";
import gql from "graphql-tag.macro";
import moment from 'moment-timezone'

let today = moment(new Date().toISOString()).tz('America/Monterrey').format()

const GET_CONSUMPTION = gql`
  query getConsumption($userQuery: UserQuery, $intakeQuery: DateRange) {
    users(query: $userQuery) {
      totalIntake(query: $intakeQuery) {
        name
        nutrientId
        unit
        value
      }
      nutrientIntakeGoals {
        nutrientId
        value
      }
    }
  }
`;



interface Session {
  userId: number | null;
}
const SessionContext = React.createContext<Session>({userId: null})

const App = () => {
  const [formActive, setFormActive] = useState(false)
  
  return (
  <SessionContext.Provider value={{userId: 1}}>
    <div className="App">
        <div className="button" onClick={ () => setFormActive(!formActive) }>Open</div>
        <Form active={formActive}/>
        <div className="container--80">
          <Query
            query={GET_CONSUMPTION}
            variables={{
              userQuery: { id: 1 },
              intakeQuery: { start: today, end: today }
            }}
          >
            {({ data, loading, error }) => {
              if (loading) return <span>loading</span>;
              if (error) return <span>error</span>;
              return <Dashboard data={data.users[0]} />;
            }}
          </Query>
        </div>
      </div>
  </SessionContext.Provider>
    
  );
};
export default App;
export { SessionContext };
