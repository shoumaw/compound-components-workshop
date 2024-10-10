// BreadcrumbsCompound.js
import React, { ReactNode } from "react";

interface BreadcrumbsProps {
  children: ReactNode;
}

interface BreadcrumbItemProps {
  children: ReactNode;
  href?: string;
  isLast?: boolean;
}
interface BreadcrumbsComponent extends React.FC<BreadcrumbsProps> {
  Item: React.FC<BreadcrumbItemProps>;
}
const Breadcrumbs: BreadcrumbsComponent = ({ children }) => {
  const totalChildren = React.Children.count(children);
  return (
    <nav>
      <ol>
        {React.Children.map(children, (child, index) => {
          if (
            React.isValidElement<BreadcrumbItemProps>(child) &&
            child.type === Breadcrumbs.Item
          ) {
            const isLast = index === totalChildren - 1;
            return React.cloneElement(child, { isLast });
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

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  href,
  isLast,
}) => (
  <li>
    {href && !isLast ? <a href={href}>{children}</a> : <span>{children}</span>}
  </li>
);

Breadcrumbs.Item = BreadcrumbItem;

export default Breadcrumbs;
