import { createContext, FC, ReactNode, useCallback, useMemo } from "react";
import TabsContent from "../TabsCompoundComponent/TabsContent";
import TabsList from "../TabsCompoundComponent/TabsList";
import TabsTab from "../TabsCompoundComponent/TabsTab";
import TabsPanel from "../TabsCompoundComponent/TabsPanel";
import useControlled from "./useControlled";
import { TabsContext } from "../TabsCompoundComponent/TabsContext";

interface TabsProps {
  children: ReactNode;
  initialActiveTab?: number;
  activeTab: number;
  onActiveTabChange: (index: number) => void;
}
interface TabsComponent extends FC<TabsProps> {
  Content: typeof TabsContent;
  List: typeof TabsList;
  Panel: typeof TabsPanel;
  Tab: typeof TabsTab;
}

const Tabs: TabsComponent = ({
  children,
  initialActiveTab = 0,
  activeTab,
  onActiveTabChange,
}) => {
  const [value, onValueChange] = useControlled({
    value: activeTab,
    initialValue: initialActiveTab,
  });

  const handleValueChange = useCallback(
    (newValue: number) => {
      onValueChange(newValue);
      onActiveTabChange?.(newValue);
    },
    [onValueChange, onActiveTabChange]
  );

  const context = useMemo(
    () => ({
      activeTab: value,
      onActiveTabChange: handleValueChange,
    }),
    [value, handleValueChange]
  );

  return (
    <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
  );
};
Tabs.Content = TabsContent;
Tabs.List = TabsList;
Tabs.Panel = TabsPanel;
Tabs.Tab = TabsTab;

export default Tabs;
