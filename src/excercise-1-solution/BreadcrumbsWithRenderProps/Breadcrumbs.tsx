const Breadcrumbs = ({ renderItems }: { renderItems: () => JSX.Element[] }) => {
  return (
    <nav>
      <ol>{renderItems()}</ol>
    </nav>
  );
};

export default Breadcrumbs;
