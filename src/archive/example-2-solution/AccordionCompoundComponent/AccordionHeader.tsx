import { FC, ReactNode } from "react";
import { useAccordionContext } from "./AccordionContext";

export interface AccordionHeaderProps {
  children: ReactNode;
  index?: number;
}

const AccordionHeader: FC<AccordionHeaderProps> = ({ children, index }) => {
  const { openIndex, setOpenIndex } = useAccordionContext();
  const isOpen = openIndex === index;

  const handleClick = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-between items-center cursor-pointer bg-gray-100 px-4 py-2 text-lg font-semibold hover:bg-gray-200"
    >
      {children}
      <span className="text-xl">{isOpen ? "-" : "+"}</span>
    </div>
  );
};

export default AccordionHeader;
