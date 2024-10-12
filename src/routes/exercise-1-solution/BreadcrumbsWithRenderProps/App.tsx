import BreadcrumbItem from "../shared/BreadcrumbItem";
import Breadcrumbs from "./Breadcrumbs";

const App = () => {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Library", href: "/library" },
    { text: "Data", href: "/library/data" },
  ];

  return (
    <>
      <h1>Breadcrumbs Render Props Component</h1>
      <Breadcrumbs
        items={breadcrumbItems}
        renderItem={(item, isLast) => (
          <BreadcrumbItem isLast={isLast} href={item.href}>
            {item.text}
          </BreadcrumbItem>
        )}
      />
    </>
  );
};

export default App;
