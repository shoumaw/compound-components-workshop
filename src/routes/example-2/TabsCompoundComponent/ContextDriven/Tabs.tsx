import { FC, ReactNode, useState } from "react";
import { TabProvider, useTabs } from "../shared/TabContext";

interface TabsProps {
  children: ReactNode;
  initialActiveTab?: string;
}

export const Tabs: FC<TabsProps> = ({
  children,
  initialActiveTab = "tab-1",
}) => {
  const [activeTab, onActiveTabChange] = useState(initialActiveTab);

  return (
    <TabProvider activeTab={activeTab} onTabChange={onActiveTabChange}>
      {children}
    </TabProvider>
  );
};

export const TabsList: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flex space-x-4 border-gray-200">{children}</div>;
};

export const Tab: FC<{ children: ReactNode; value: string }> = ({
  children,
  value,
}) => {
  const { activeTab, onTabChange } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      className={`px-4 py-2 text-sm font-medium focus:outline-none ${
        isActive
          ? "text-indigo-600 border-b-2 border-indigo-600"
          : "text-gray-600 hover:text-indigo-600"
      }`}
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

  return <div className="p-4">{children}</div>;
};
