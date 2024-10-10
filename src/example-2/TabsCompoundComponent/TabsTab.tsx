import { FC, ReactNode } from "react";

export interface TabsTabProps {
  children: ReactNode;
  onClick?: () => void;
}

const TabsTab: FC<TabsTabProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default TabsTab;
