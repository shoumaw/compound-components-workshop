import BreadcrumbItem from "../shared/BreadcrumbItem";
interface BreadcrumbItem {
  href?: string;
  text: string;
}
const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav className="text-sm">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <BreadcrumbItem href={item.href}>{item.text}</BreadcrumbItem>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
