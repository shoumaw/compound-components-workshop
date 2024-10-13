import { FC, ReactNode } from "react";
import { useAccordionContext } from "./AccordionContext";

export interface AccordionBodyProps {
  children: ReactNode;
  index?: number;
}

const AccordionBody: FC<AccordionBodyProps> = ({ children, index }) => {
  const { openIndex } = useAccordionContext();
  const isVisible = openIndex === index;

  return isVisible ? (
    <div className="p-4 bg-white text-gray-700 border-t border-gray-300">
      {children}
    </div>
  ) : null;
};

export default AccordionBody;
