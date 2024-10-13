import { ReactNode, FC, Children, cloneElement } from "react";
import React from "react";
import AccordionHeader, { AccordionHeaderProps } from "./AccordionHeader";
import AccordionBody, { AccordionBodyProps } from "./AccordionBody";

export interface AccordionItemProps {
  children: ReactNode;
  index?: number;
}
interface AccordionItemComponent extends FC<AccordionItemProps> {
  Header: typeof AccordionHeader;
  Body: typeof AccordionBody;
}
const AccordionItem: AccordionItemComponent = ({ children, index }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {Children.map(children, (child) => {
        if (
          React.isValidElement<AccordionHeaderProps | AccordionBodyProps>(
            child
          ) &&
          (child.type === AccordionHeader || child.type === AccordionBody)
        ) {
          return cloneElement(child, { index });
        } else {
          throw new Error(
            "AccordionItem component only accepts AccordionHeader and AccordionBody components as children"
          );
        }
      })}
    </div>
  );
};
AccordionItem.Header = AccordionHeader;
AccordionItem.Body = AccordionBody;
export default AccordionItem;
