import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";

import routes from "../routes";
import Dashboard from "./Home/Dashboard";

const protectedRoutes = (routes || []).filter((route) => route?.protected);
const unprotectedRoutes = (routes || []).filter((route) => !route?.protected);

const App = () => {
  return (
    <Router>
      <Routes>
        {unprotectedRoutes.map(({ name, path, component }) => (
          <Route key={name} path={path} exact element={component} />
        ))}
        {protectedRoutes?.map(({ name, path, component }) => (
          <Route
            key={name}
            exact
            path={path}
            element={<Dashboard childern={component} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
