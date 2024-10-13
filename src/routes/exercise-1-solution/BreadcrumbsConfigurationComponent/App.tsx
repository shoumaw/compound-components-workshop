import Breadcrumbs from "./Breadcrumbs";

const App = () => {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Library", href: "/library" },
    { text: "Data" },
  ];

  return (
    <div className="flex flex-col gap-y-4 font-bold">
      <h1>Breadcrumbs Configuration Component</h1>
      <Breadcrumbs items={breadcrumbItems} />
    </div>
  );
};

export default App;
