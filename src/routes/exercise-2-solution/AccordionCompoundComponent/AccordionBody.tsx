import { FC, ReactNode } from "react";
import { useAccordionContext } from "./AccordionContext";

export interface AccordionBodyProps {
  children: ReactNode;
  index?: number;
}

const AccordionBody: FC<AccordionBodyProps> = ({ children, index }) => {
  const { openIndex } = useAccordionContext();
  const isVisible = openIndex === index;

  return isVisible ? <div>{children}</div> : null;
};

export default AccordionBody;
