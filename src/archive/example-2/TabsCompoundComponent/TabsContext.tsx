import { createContext, useContext } from "react";

interface TabsContextType {
  activeTab?: number;
  onActiveTabChange: (index: number) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = (): TabsContextType => {
  const context = useContext(TabsContext);
  console.log("context", context);
  if (!context) {
    throw new Error("Tabs components must be used within Tabs");
  }
  return context;
};

export { TabsContext, useTabsContext };
