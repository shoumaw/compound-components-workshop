import { FC, ReactNode } from "react";
import { TabProvider, useTabs } from "../shared/TabContext";
import { useControlled } from "../shared/useControlled";

interface TabsProps {
  children: ReactNode;
  activeTab?: string;
  onTabChange?: (newTab: string) => string;
}

export const Tabs: FC<TabsProps> = ({
  children,
  activeTab: activeTabProp,
  onTabChange: onTabChangeProp,
}) => {
  const [activeTab, onChange] = useControlled({
    value: activeTabProp,
    initialValue: "",
  });

  const onTabChange = (newTab: string) => {
    onChange?.(newTab);
    onTabChangeProp?.(newTab);
  };

  return (
    <TabProvider activeTab={activeTab} onTabChange={onTabChange}>
      {children}
    </TabProvider>
  );
};

export const TabsList: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export const Tab: FC<{ children: ReactNode; value: string }> = ({
  children,
  value,
}) => {
  const { activeTab, onTabChange } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      style={{ background: isActive ? "lavender" : "transparent" }}
      onClick={() => onTabChange(value)}
    >
      {children}
    </button>
  );
};

export const TabPanel: FC<{ children: ReactNode; value: string }> = ({
  children,
  value,
}) => {
  const { activeTab } = useTabs();

  if (activeTab !== value) {
    return null;
  }

  return <div>{children}</div>;
};
