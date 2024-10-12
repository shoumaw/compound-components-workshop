import { FC, ReactNode } from "react";

export interface TabsPanelProps {
  children: ReactNode;
  isVisible?: boolean;
}

const TabsPanel: FC<TabsPanelProps> = ({ children, isVisible }) => {
  return <>{isVisible ? children : null}</>;
};
export default TabsPanel;
