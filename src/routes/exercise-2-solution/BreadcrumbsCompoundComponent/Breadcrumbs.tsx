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
                {child}
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
