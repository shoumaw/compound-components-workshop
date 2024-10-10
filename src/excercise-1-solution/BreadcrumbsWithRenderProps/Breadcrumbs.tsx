const Breadcrumbs = ({ renderItems }: { renderItems: () => JSX.Element[] }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol>{renderItems()}</ol>
    </nav>
  );
};

export default Breadcrumbs;
