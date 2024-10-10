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
    <div onClick={handleClick}>
      {children}
      <span style={{ float: "right" }}>{isOpen ? "-" : "+"}</span>
    </div>
  );
};

export default AccordionHeader;
