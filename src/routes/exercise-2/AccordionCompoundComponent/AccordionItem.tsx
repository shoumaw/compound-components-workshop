import { ReactNode, FC } from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";
import { useAccordionContext } from "./AccordionContext";

export interface AccordionItemProps {
  children: ReactNode;
  index?: number;
}

interface AccordionItemComponent extends FC<AccordionItemProps> {
  Header: typeof AccordionHeader;
  Body: typeof AccordionBody;
}

const AccordionItem: AccordionItemComponent = ({ children, index }) => {
  const { openIndex, setOpenIndex } = useAccordionContext();

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/*
        TODO:
        - Iterate over the children using Children.map
        - For each child, verify it's a valid AccordionHeader or AccordionBody element
        - Clone the child and pass the current index as a prop
        - Throw an error if a child is not AccordionHeader or AccordionBody
      */}
      {/* Children.map */}
    </div>
  );
};

// Attach Header and Body as subcomponents of AccordionItem
AccordionItem.Header = AccordionHeader;
AccordionItem.Body = AccordionBody;

export default AccordionItem;
