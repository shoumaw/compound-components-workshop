import BreadcrumbItem from "../shared/BreadcrumbItem";
import Breadcrumbs from "./Breadcrumbs";

const App = () => {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Library", href: "/library" },
    { text: "Data", href: "/library/data" },
  ];

  return (
    <Breadcrumbs
      items={breadcrumbItems}
      renderItem={(item, isLast) => (
        <BreadcrumbItem isLast={isLast} href={item.href}>
          {item.text}
        </BreadcrumbItem>
      )}
    />
  );
};

export default App;
