import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes";
const root = document.getElementById("app");

function build(Component) {
  return render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root
  );
}

build(AppRouter);

if (module.hot) {
  module.hot.accept("./routes", () => {
    const AppRouter = require("./routes").default;
    build(AppRouter);
  });
}
