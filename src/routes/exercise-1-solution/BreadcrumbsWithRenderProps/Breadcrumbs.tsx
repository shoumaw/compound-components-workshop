interface BreadcrumbItem {
  href?: string;
  text: string;
}
const Breadcrumbs = ({
  items,
  renderItem,
}: {
  items: BreadcrumbItem[];
  renderItem: (item: BreadcrumbItem) => JSX.Element;
}) => {
  return (
    <nav className="text-sm">
      <ol className="flex space-x-2">
        {items.map((item) => renderItem(item))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
