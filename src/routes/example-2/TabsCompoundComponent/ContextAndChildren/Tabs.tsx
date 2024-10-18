import {
  Children,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { TabProvider, useTabs } from "../shared/TabContext";

interface TabsProps {
  children: ReactNode;
  initialActiveTab?: string;
}

export const Tabs: FC<TabsProps> = ({
  children,
  initialActiveTab = "tab-1",
}) => {
  const tabInfo = getTabInfo(children);

  const [activeTab, onActiveTabChange] = useState(initialActiveTab);

  return (
    <TabProvider activeTab={activeTab} onTabChange={onActiveTabChange}>
      <TabList tabInfo={tabInfo} />
      {children}
    </TabProvider>
  );
};

const getTabInfo = (
  children: ReactNode
): { value: string; label: ReactNode }[] => {
  return (
    Children.toArray(children)
      // We are going to be aggregating props
      // all invalid elements need to go

      /**
       * You could check for labels in a couple ways
       *  1. run time type enforcement
       *  2. just verifying the label exists on the prop
       */

      // 1.
      // if(child.type !== TabItem) {
      //     throw new Error("Only TabItem can be children of Tabs")
      // }

      // // 2.
      // if(!child.props || typeof child.props !== 'object' || !('label' in child.props)) {
      //     throw new Error("children of Tabs need a label prop")
      // }
      .filter(
        (child): child is ReactElement<TabItemProps> =>
          isValidElement<TabItemProps>(child) && child.type === TabItem
      )
      .map((child) => {
        return { value: child.props.value, label: child.props.label };
      })
  );
};

interface TabListProps {
  tabInfo: { value: string; label: ReactNode }[];
}

export const TabList: FC<TabListProps> = ({ tabInfo }) => {
  const { activeTab, onTabChange } = useTabs();

  return (
    <div className="flex space-x-4">
      {tabInfo.map(({ value, label }) => (
        <button
          key={value}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === value
              ? "text-indigo-600 border-b-2 border-indigo-600"
              : "text-gray-600 hover:text-indigo-600"
          }`}
          onClick={() => onTabChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

interface TabItemProps {
  label: string;
  value: string;
  children: ReactNode;
}

export const TabItem: FC<TabItemProps> = ({ value, children }) => {
  const { activeTab } = useTabs();

  if (activeTab !== value) {
    return null;
  }

  return <div className="p-4">{children}</div>;
};
