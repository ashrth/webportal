import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from "react";
import GoogleMap from "./components/GoogleMap";

function App() {
  const [data, setData] = useState({});

  const getData = (inputData) => {
    setData(inputData);
  };

 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Form getData={getData} />}></Route>

          <Route
            exact
            path="/dashboard"
            element={<Dashboard data={data} />}
          ></Route>
          <Route exact path="/map" element={<GoogleMap />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
