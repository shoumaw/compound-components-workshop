import { ReactNode } from "react";

export interface BreadcrumbItemProps {
  children: ReactNode;
  href?: string;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ children, href }) => {
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

export default BreadcrumbItem;
