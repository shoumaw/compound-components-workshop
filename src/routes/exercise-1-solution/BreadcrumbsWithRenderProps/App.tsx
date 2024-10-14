import BreadcrumbItem from "../shared/BreadcrumbItem";
import Breadcrumbs from "./Breadcrumbs";

const App = () => {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Library", href: "/library" },
    { text: "Data" },
  ];

  return (
    <div className="flex flex-col gap-y-4 font-bold">
      <h1>Breadcrumbs Render Props Component</h1>
      <Breadcrumbs
        items={breadcrumbItems}
        renderItem={(item) => (
          <BreadcrumbItem href={item.href}>{item.text}</BreadcrumbItem>
        )}
      />
    </div>
  );
};

export default App;
