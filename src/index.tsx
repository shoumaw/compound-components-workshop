import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";

import Exercise1CompoundComponentApp from "./routes/exercise-1/BreadcrumbsCompoundComponent/App";
import Exercise1ConfigurationComponentApp from "./routes/exercise-1/BreadcrumbsConfigurationComponent/App";
import Exercise1RenderPropsApp from "./routes/exercise-1/BreadcrumbsWithRenderProps/App";
import Exercise2CompoundComponentApp from "./routes/exercise-2/BreadcrumbsCompoundComponent/App";
import Exercise3CompoundComponentApp from "./routes/exercise-3/AccordionCompoundComponent/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
