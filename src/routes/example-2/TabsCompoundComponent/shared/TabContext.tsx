import { createContext, FC, ReactNode, useContext } from "react";

interface TabContextValues {
  activeTab: string;
  onTabChange: (newActiveTab: string) => void;
}

const TabContext = createContext<TabContextValues | null>(null);

export const useTabs = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error("Cannot use useTabs outside of a Tabs Component");
  }

  return context;
};

interface TabProviderProps extends TabContextValues {
  children: ReactNode;
}

export const TabProvider: FC<TabProviderProps> = ({ children, ...context }) => {
  return <TabContext.Provider value={context}>{children}</TabContext.Provider>;
};
