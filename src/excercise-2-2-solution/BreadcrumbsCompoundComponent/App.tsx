// App.js
import React from "react";
import Breadcrumbs from "./BreadcrumbsCompoundComponent";

const App = () => (
  <Breadcrumbs>
    <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item href="/library">Library</Breadcrumbs.Item>
    <Breadcrumbs.Item>Data</Breadcrumbs.Item> {/* Current page */}
  </Breadcrumbs>
);

export default App;
