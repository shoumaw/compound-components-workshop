const Breadcrumbs = ({
  items,
}: {
  items: { href?: string; text: string }[];
}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {index < items.length - 1 && item.href ? (
              <a href={item.href}>{item.text}</a>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
