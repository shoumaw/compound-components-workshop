import React, { ReactNode } from "react";
import BreadcrumbItem, { BreadcrumbItemProps } from "./BreadcrumbItem";

interface BreadcrumbsProps {
  children: ReactNode;
}

interface BreadcrumbsComponent extends React.FC<BreadcrumbsProps> {
  Item: React.FC<BreadcrumbItemProps>;
}

const Breadcrumbs: BreadcrumbsComponent = ({ children }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol>
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
