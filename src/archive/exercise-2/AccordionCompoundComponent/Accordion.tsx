import { ReactNode, FC } from "react";
import { AccordionContext } from "./AccordionContext";
import AccordionItem from "./AccordionItem";

interface AccordionProps {
  children: ReactNode;
  initialOpenIndex?: number | null;
}

const Accordion: FC<AccordionProps> = ({
  children,
  initialOpenIndex = null,
}) => {
  // TODO:
  // - Initialize state to track the currently open accordion item
  // - Use useState to manage 'openIndex'

  // TODO:
  // - Create a context value using useMemo to optimize performance
  // - The context should provide 'openIndex' and 'setOpenIndex'

  return (
    // TODO:
    // - Use AccordionContext.Provider to pass down the context value
    // - Iterate over the children using Children.map
    // - For each child, verify it's a valid AccordionItem element
    // - Clone the child element and pass the current index as a prop
    // - Throw an error if a child is not an AccordionItem
    <AccordionContext.Provider
      value={{ openIndex: 0, setOpenIndex: () => {} } /* context value */}
    >
      <div className="space-y-2">{/* Children.map */}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
