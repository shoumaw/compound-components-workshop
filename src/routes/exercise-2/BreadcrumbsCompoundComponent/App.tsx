import { Breadcrumbs } from "./Breadcrumbs";
import BreadcrumbItem from "./shared/BreadcrumbItem";

const App = () => (
  <div className="flex flex-col gap-y-4 font-bold">
    <h1>Breadcrumbs Compound Component</h1>
    <Breadcrumbs separator="-">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/library">Library</BreadcrumbItem>
      <BreadcrumbItem>Data</BreadcrumbItem>
    </Breadcrumbs>
  </div>
);

export default App;
