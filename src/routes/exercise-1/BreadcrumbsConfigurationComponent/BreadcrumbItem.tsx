import React, { ReactNode } from "react";

export interface BreadcrumbItemProps {
  children: ReactNode;
  href?: string;
  isLast?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  href,
  isLast,
}) => (
  <li>
    {/*
      TODO:
      - If 'href' is provided and this is not the last item, render an <a> tag with 'href' and 'children'
      - Otherwise, render a <span> tag with 'children'
    */}
  </li>
);

export default BreadcrumbItem;
