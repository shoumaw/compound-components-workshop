import { createContext, FC, ReactNode, useMemo, useState } from "react";
import TabsContent, { TabsContentProps } from "./TabsContent";
import TabsTab from "./TabsTab";
import TabsPanel from "./TabsPanel";
import TabsList, { TabsListProps } from "./TabsList";
import React from "react";
import { TabsContext } from "./TabsContext";

interface TabsProps {
  children: ReactNode;
  initialActiveTab?: number;
}
interface TabsComponent extends FC<TabsProps> {
  Content: typeof TabsContent;
  List: typeof TabsList;
  Panel: typeof TabsPanel;
  Tab: typeof TabsTab;
}

const Tabs: TabsComponent = ({ children, initialActiveTab = 0 }) => {
  const [activeTab, onActiveTabChange] = useState(initialActiveTab);

  const context = useMemo(
    () => ({
      activeTab,
      onActiveTabChange,
    }),
    [activeTab]
  );

  return (
    <TabsContext.Provider value={context}>
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement<TabsListProps | TabsContentProps>(child) &&
          (child.type === TabsList || child.type === TabsContent)
        ) {
          return child;
        } else {
          throw new Error(
            "Tabs component only accepts TabsList and TabsContent components as children"
          );
        }
      })}
    </TabsContext.Provider>
  );
};
Tabs.Content = TabsContent;
Tabs.List = TabsList;
Tabs.Panel = TabsPanel;
Tabs.Tab = TabsTab;

export default Tabs;
