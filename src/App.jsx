import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App1() {
  return <h1>App !</h1>;
}

function ResumeComponent() {
  return (
    <h1>Resume ResumeComponent</h1>
  );
}

const App = () => (
  <div className="container">
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<App1 />}
        />
        <Route
          exact
          path="/:userId"
          element={<ResumeComponent />}
        />
      </Routes>
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
