import Breadcrumbs from "./Breadcrumbs";

const App = () => (
  <Breadcrumbs>
    <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item href="/library">Library</Breadcrumbs.Item>
    <Breadcrumbs.Item isLast>Data</Breadcrumbs.Item> {/* Current page */}
  </Breadcrumbs>
);

export default App;
