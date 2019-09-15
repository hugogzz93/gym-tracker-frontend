import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/app.sass";
import Dashboard from "./components/dashboard";
import Form from "./components/form";
import { Query } from "react-apollo";
import gql from "graphql-tag.macro";
import moment from "moment-timezone";

let today = moment(new Date().toISOString())
  .tz("America/Monterrey")
  .format();

const GET_CONSUMPTION = gql`
  query getConsumption($userQuery: UserQuery, $intakeQuery: DateRange) {
    users(query: $userQuery) {
      dailyIntake(query: $intakeQuery) {
        totals {
          name
          nutrientId
          unit
          value
        }
        hourly {
          nutrientId
          value
        }
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

const SessionContext = React.createContext<Session>({ userId: null });

const App = () => {
  const [formActive, setFormActive] = useState(false);

  return (
    <SessionContext.Provider value={{ userId: 1 }}>
      <div className="App">
        <div id="main__btn-section" className="grid-1 row-gap-10">
          <div
            className="main-btn button btn--blue"
            onClick={() => setFormActive(!formActive)}
          >
            Add Intake
          </div>
          <div
            className="main-btn button btn--blue"
            onClick={() => setFormActive(!formActive)}
          >
            Daily Log
          </div>
        </div>
        <Form active={formActive} close={e => setFormActive(false)} />
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
        <div className="flex-col">
          <div style={{ padding: "1rem", background: "#000a" }}>
            <a
              style={{ color: "white" }}
              href="https://ods.od.nih.gov/Health_Information/Dietary_Reference_Intakes.aspx"
            >
              Daily Recommended Intakes
            </a>
          </div>
        </div>
      </div>
    </SessionContext.Provider>
  );
};
export default App;
export { SessionContext };
