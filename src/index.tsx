import React from "react";
import ReactDOM from "react-dom/client";

import MainApp from "./App";
import Example1CompoundComponentApp from "./example-1/SelectCompoundComponent/App";
import Example1ConfigurationComponentApp from "./example-1/SelectConfigurationComponent/App";
import Example1RenderPropsApp from "./example-1/SelectWithRenderProps/App";
import Example2UncontrolledCompoundComponentApp from "./example-2/TabsCompoundComponent/App";
import Example2ControlledCompoundComponentApp from "./example-2/ControlledTabsCompoundComponent/App";

// Determine which App to render based on environment variable
const getAppComponent = () => {
  const example = process.env.REACT_APP_EXAMPLE;
  switch (example) {
    case "example1CompoundComponent":
      return Example1CompoundComponentApp;
    case "example1ConfigurationComponent":
      return Example1ConfigurationComponentApp;
    case "example1RenderProps":
      return Example1RenderPropsApp;
    case "example2UncontrolledCompoundComponent":
      return Example2UncontrolledCompoundComponentApp;
    case "example2ControlledCompoundComponent":
      return Example2ControlledCompoundComponentApp;
    default:
      return MainApp;
  }
};

const SelectedApp = getAppComponent();

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <SelectedApp />
  </React.StrictMode>
);
