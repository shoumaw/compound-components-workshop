import BreadcrumbItem from "../shared/BreadcrumbItem";

const Breadcrumbs = ({
  items,
}: {
  items: { href?: string; text: string }[];
}) => {
  return (
    <nav className="text-sm">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <BreadcrumbItem isLast={index === items.length - 1} href={item.href}>
            {item.text}
          </BreadcrumbItem>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
