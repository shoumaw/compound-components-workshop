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
  return (
    <nav aria-label="breadcrumb">
      <ol>{children}</ol>
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
