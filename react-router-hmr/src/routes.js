import React from "react";
import { Route } from "react-router-dom";

import App from "./App";

export default () =>
  <main>
    <Route exact path="/" component={App} />
  </main>;
