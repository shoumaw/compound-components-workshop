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
const Accordion: FC<AccordionProps> = ({
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
            return cloneElement(child, { index });
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

export default Accordion;
