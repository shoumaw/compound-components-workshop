import Breadcrumbs from "./Breadcrumbs";

const App = () => (
  <div className="flex flex-col gap-y-4 font-bold">
    <h1>Breadcrumbs Compound Component</h1>
    <Breadcrumbs>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/library">Library</Breadcrumbs.Item>
      <Breadcrumbs.Item>Data</Breadcrumbs.Item>
    </Breadcrumbs>
  </div>
);

export default App;
