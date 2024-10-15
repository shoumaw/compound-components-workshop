import type { FC } from "react";
import { useAccordionContext } from "./AccordionPanelContext";

export interface AccordionContentProps {
  children: React.ReactNode;
}

export const AccordionContent: FC<AccordionContentProps> = ({ children }) => {
  return <></>;
};
