import type { FC } from "react";
import { useAccordionContext } from "./AccordionPanelContext";

export interface AccordionContentProps {
  children: React.ReactNode;
}

export const AccordionContent: FC<AccordionContentProps> = ({ children }) => {
  const { isOpen } = useAccordionContext();
  return (
    <div
      className="p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900"
      hidden={!isOpen}
    >
      {children}
    </div>
  );
};
