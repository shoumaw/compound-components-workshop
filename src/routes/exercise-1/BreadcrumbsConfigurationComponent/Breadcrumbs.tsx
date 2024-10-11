const Breadcrumbs: React.FC<{
  items: { href?: string; text: string }[];
}> = ({ items }) => {
  return (
    <nav>
      <ol>
        {/*
          TODO: Iterate over the items array and render BreadcrumbItem components
          - Pass necessary props to each BreadcrumbItem
          - Determine if the item is the last one for styling purposes
        */}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
