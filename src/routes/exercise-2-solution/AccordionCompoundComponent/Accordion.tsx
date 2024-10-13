import {
  useState,
  ReactNode,
  FC,
  useMemo,
  Children,
  cloneElement,
  ReactElement,
} from "react";
import { AccordionContext } from "./AccordionContext";
import AccordionItem, { AccordionItemProps } from "./AccordionItem";
import React from "react";

interface AccordionProps {
  children: ReactNode;
  initialOpenIndex?: number | null;
}
interface AccordionComponent extends FC<AccordionProps> {
  Item: typeof AccordionItem;
}
const Accordion: AccordionComponent = ({
  children,
  initialOpenIndex = null,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null | undefined>(
    initialOpenIndex
  );

  const contextValue = useMemo(
    () => ({
      openIndex,
      setOpenIndex,
    }),
    [openIndex]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className="space-y-2">
        {Children.map(children, (child, index) => {
          if (
            React.isValidElement<AccordionItemProps>(child) &&
            child.type === AccordionItem
          ) {
            return cloneElement(child as ReactElement, { index });
          } else {
            throw new Error(
              "Accordion component only accepts AccordionItem components as children"
            );
          }
        })}
      </div>
    </AccordionContext.Provider>
  );
};
Accordion.Item = AccordionItem;

export default Accordion;
