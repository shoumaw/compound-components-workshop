import React, { Children, cloneElement, ReactNode } from "react";

interface BreadcrumbItemProps {
  children: ReactNode;
  href?: string;
  isLast?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  href,
  isLast,
}) => (
  <li className="inline-flex items-center">
    {href && !isLast ? (
      <a href={href} className="text-blue-500 hover:text-blue-700">
        {children}
      </a>
    ) : (
      <span className="text-gray-500">{children}</span>
    )}
  </li>
);

interface BreadcrumbsProps {
  children: ReactNode;
  separator?: string;
}

interface BreadcrumbsComponent extends React.FC<BreadcrumbsProps> {
  Item: React.FC<BreadcrumbItemProps>;
}
const Breadcrumbs: BreadcrumbsComponent = ({ children, separator = "/" }) => {
  const items = Children.toArray(children);

  return (
    <nav className="text-sm">
      <ol className="flex space-x-2">
        {Children.map(children, (child, index) => {
          if (
            React.isValidElement<BreadcrumbItemProps>(child) &&
            child.type === BreadcrumbItem
          ) {
            const isLast = index === items.length - 1;
            return (
              <>
                {cloneElement(child, { isLast })}
                {!isLast && (
                  <span className="mx-2 text-gray-400">{separator}</span>
                )}
              </>
            );
          } else {
            throw new Error(
              "Breadcrumbs component only accepts BreadcrumbItem components as children"
            );
          }
        })}
      </ol>
    </nav>
  );
};

Breadcrumbs.Item = BreadcrumbItem;

export default Breadcrumbs;
