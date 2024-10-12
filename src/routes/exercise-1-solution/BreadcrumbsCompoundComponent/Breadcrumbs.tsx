import React, { ReactNode } from "react";
import BreadcrumbItem, { BreadcrumbItemProps } from "../shared/BreadcrumbItem";

interface BreadcrumbsProps {
  children: ReactNode;
}

interface BreadcrumbsComponent extends React.FC<BreadcrumbsProps> {
  Item: React.FC<BreadcrumbItemProps>;
}
const Breadcrumbs: BreadcrumbsComponent = ({ children }) => {
  return (
    <nav>
      <ol>{children}</ol>
    </nav>
  );
};

Breadcrumbs.Item = BreadcrumbItem;

export default Breadcrumbs;
