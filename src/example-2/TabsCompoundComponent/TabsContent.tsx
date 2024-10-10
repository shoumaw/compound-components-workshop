import { FC, ReactNode } from "react";
import { useTabsContext } from "./TabsContext";
import React from "react";
import TabsPanel, { TabsPanelProps } from "./TabsPanel";

export interface TabsContentProps {
  children: ReactNode;
}

const TabsContent: FC<TabsContentProps> = ({ children }) => {
  const { activeTab } = useTabsContext();

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (
          React.isValidElement<TabsPanelProps>(child) &&
          child.type === TabsPanel
        ) {
          return React.cloneElement(child, {
            isVisible: activeTab === index,
          });
        } else {
          throw new Error(
            "TabsContent component only accepts TabsPanel components as children"
          );
        }
      })}
    </>
  );
};

export default TabsContent;
