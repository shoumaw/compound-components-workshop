import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";

import Example1CompoundComponentApp from "./routes/example-1/SelectCompoundComponent/App";
import Example1ConfigurationComponentApp from "./routes/example-1/SelectConfigurationComponent/App";
import Example1RenderPropsApp from "./routes/example-1/SelectWithRenderProps/App";
import Example2ContextCompoundComponentApp from "./routes/example-2/TabsCompoundComponent/ContextDriven/App";
import Example2ContextAndChildrenCompoundComponentApp from "./routes/example-2/TabsCompoundComponent/ContextAndChildren/App";

import Exercise1CompoundComponentApp from "./routes/exercise-1-solution/BreadcrumbsCompoundComponent/App";
import Exercise1ConfigurationComponentApp from "./routes/exercise-1-solution/BreadcrumbsConfigurationComponent/App";
import Exercise1RenderPropsApp from "./routes/exercise-1-solution/BreadcrumbsWithRenderProps/App";
import Exercise2CompoundComponentApp from "./routes/exercise-2-solution/BreadcrumbsCompoundComponent/App";
import Exercise3CompoundComponentApp from "./routes/exercise-3-solution/AccordionCompoundComponent/App";

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
        path: "example-2-context-compound-component",
        element: <Example2ContextCompoundComponentApp />,
      },
      {
        path: "example-2-context-and-children-compound-component",
        element: <Example2ContextAndChildrenCompoundComponentApp />,
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
        path: "exercise-2-solution-compound-component",
        element: <Exercise2CompoundComponentApp />,
      },
      {
        path: "exercise-3-solution-compound-component",
        element: <Exercise3CompoundComponentApp />,
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
