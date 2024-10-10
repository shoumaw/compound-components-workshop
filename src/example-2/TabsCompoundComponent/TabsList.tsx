import { FC, ReactNode } from "react";
import { useTabsContext } from "./TabsContext";
import React from "react";
import TabsTab, { TabsTabProps } from "./TabsTab";

export interface TabsListProps {
  children: ReactNode;
}

const TabsList: FC<TabsListProps> = ({ children }) => {
  const { onActiveTabChange } = useTabsContext();

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (
          React.isValidElement<TabsTabProps>(child) &&
          child.type === TabsTab
        ) {
          return React.cloneElement(child, {
            onClick: () => onActiveTabChange(index),
          });
        } else {
          throw new Error(
            "TabsList component only accepts TabsTab components as children"
          );
        }
      })}
    </>
  );
};
export default TabsList;
