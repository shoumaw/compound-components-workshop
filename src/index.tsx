import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";

import Example1CompoundComponentApp from "./routes/example-1/SelectCompoundComponent/App";
import Example1ConfigurationComponentApp from "./routes/example-1/SelectConfigurationComponent/App";
import Example1RenderPropsApp from "./routes/example-1/SelectWithRenderProps/App";
import Example2UncontrolledCompoundComponentApp from "./routes/example-2/TabsCompoundComponent/App";
import Example2ControlledCompoundComponentApp from "./routes/example-2/ControlledTabsCompoundComponent/App";

import Exercise1CompoundComponentApp from "./routes/exercise-1/BreadcrumbsCompoundComponent/App";
import Exercise1ConfigurationComponentApp from "./routes/exercise-1/BreadcrumbsConfigurationComponent/App";
import Exercise1RenderPropsApp from "./routes/exercise-1/BreadcrumbsWithRenderProps/App";
import Exercise2CompoundComponentApp from "./routes/exercise-2/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "example-1-configuration-component",
        element: <Example1ConfigurationComponentApp />,
      },
      {
        path: "example-1-render-props",
        element: <Example1RenderPropsApp />,
      },
      {
        path: "example-1-compound-component",
        element: <Example1CompoundComponentApp />,
      },
      {
        path: "example-2-controlled-compound-component",
        element: <Example2ControlledCompoundComponentApp />,
      },
      {
        path: "example-2-uncontrolled-compound-component",
        element: <Example2UncontrolledCompoundComponentApp />,
      },
      //----------------------------------------//
      {
        path: "exercise-1-configuration-component",
        element: <Exercise1ConfigurationComponentApp />,
      },
      {
        path: "exercise-1-render-props",
        element: <Exercise1RenderPropsApp />,
      },
      {
        path: "exercise-1-compound-component",
        element: <Exercise1CompoundComponentApp />,
      },
      {
        path: "exercise-2-compound-component",
        element: <Exercise2CompoundComponentApp />,
      },
    ],
  },
]);
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
