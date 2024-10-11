import { ReactNode } from "react";

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
    {href && !isLast ? <a href={href}>{children}</a> : <span>{children}</span>}
  </li>
);

export default BreadcrumbItem;
