import Breadcrumbs from "./Breadcrumbs";

const App = () => {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Library", href: "/library" },
    { text: "Data" },
  ];

  return <Breadcrumbs items={breadcrumbItems} />;
};

export default App;
