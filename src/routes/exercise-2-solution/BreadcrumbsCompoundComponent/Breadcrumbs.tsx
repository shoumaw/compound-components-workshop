import React, { Children, cloneElement, FC, ReactNode } from "react";

interface BreadcrumbItemProps {
  children: ReactNode;
  href?: string;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  href,
}) => {
  const isLink = typeof href !== "undefined";
  return (
    <li className="inline-flex items-center">
      {isLink ? (
        <a href={href} className="text-blue-500 hover:text-blue-700">
          {children}
        </a>
      ) : (
        <span className="text-gray-500">{children}</span>
      )}
    </li>
  );
};

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
