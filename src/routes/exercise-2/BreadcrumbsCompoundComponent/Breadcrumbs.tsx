import React, { Children, cloneElement, FC, ReactNode } from "react";
import BreadcrumbItem, { BreadcrumbItemProps } from "./shared/BreadcrumbItem";

interface BreadcrumbsProps {
  children: ReactNode;
  separator?: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  children,
  separator = "/",
}) => {
  return (
    <nav className="text-sm">
      <ol className="flex space-x-2">
        {/* Fill in the rest of the code here */}
      </ol>
    </nav>
  );
};
