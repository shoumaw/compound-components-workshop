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
    <nav className="text-sm">
      <ol className="flex space-x-2">
        {/*
          TODO:
          - Render the children within an ordered list.
          - Each child is expected to be a Breadcrumbs.Item component.        */}
      </ol>
    </nav>
  );
};

Breadcrumbs.Item = BreadcrumbItem;

export default Breadcrumbs;
