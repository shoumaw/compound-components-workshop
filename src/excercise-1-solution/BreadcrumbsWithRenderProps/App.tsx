import Breadcrumbs from "./Breadcrumbs";

const App = () => {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Library", href: "/library" },
    { text: "Data", href: "/library/data" },
  ];

  return (
    <Breadcrumbs
      renderItems={() =>
        breadcrumbItems.map((item, index) => (
          <li key={index}>
            {index < breadcrumbItems.length - 1 ? (
              <a href={item.href}>{item.text}</a>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))
      }
    />
  );
};

export default App;
