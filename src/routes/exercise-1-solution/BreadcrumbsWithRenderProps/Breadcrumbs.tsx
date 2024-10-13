const Breadcrumbs = ({
  items,
  renderItem,
}: {
  items: { href?: string; text: string }[];
  renderItem: (
    item: { href?: string; text: string },
    isLast: boolean
  ) => JSX.Element;
}) => {
  return (
    <nav className="text-sm">
      <ol className="flex space-x-2">
        {items.map((item, index) =>
          renderItem(item, index === items.length - 1)
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
