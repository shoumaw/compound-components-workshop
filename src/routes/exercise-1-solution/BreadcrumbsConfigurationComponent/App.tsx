import Breadcrumbs from "./Breadcrumbs";

const App = () => {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Library", href: "/library" },
    { text: "Data" },
  ];

  return (
    <>
      <h1>Breadcrumbs Configuration Component</h1>
      <Breadcrumbs items={breadcrumbItems} />
    </>
  );
};

export default App;
