import { Children, Fragment, isValidElement, FC, ReactNode, ComponentPropsWithoutRef, SVGProps } from "react";

export interface BreadcrumbsProps extends ComponentPropsWithoutRef<"nav"> {
  /**  Optional separator to override the default chevron right */
  separator?: ReactNode;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ children, separator: separatorProp, ...navProps }) => {
  const separator = separatorProp || <DefaultSeparator />;

  return (
    <nav {...navProps}>
      <ul className="uiline-breadcrumbs">{addSeparators(children, separator)}</ul>
    </nav>
  );
};

const addSeparators = (children: ReactNode, separator: ReactNode): ReactNode[] => {
  return Children.toArray(children)
    .filter(isValidElement)
    .map((child, index, allChildren) => {
      const isLast = index === allChildren.length - 1;
      return (
        // You still need some key here
        <Fragment key={`breadcrumb-item-${index}`}>
          <li>{child}</li>
          {!isLast && <li>{separator}</li>}
        </Fragment>
      );
    });
};

const DefaultSeparator: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 6l6 6l-6 6"
      ></path>
    </svg>
  );
};

export const BreadcrumbLink: FC<ComponentPropsWithoutRef<"a">> = ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
};

export const BreadcrumbText: FC<ComponentPropsWithoutRef<"span">> = ({ children, ...props }) => {
  return <span {...props}>{children}</span>;
};
