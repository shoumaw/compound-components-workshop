import { createContext, useContext } from "react";

interface AccordionContextType {
  openIndex?: number | null;
  setOpenIndex: (index?: number | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

const useAccordionContext = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

export { AccordionContext, useAccordionContext };
