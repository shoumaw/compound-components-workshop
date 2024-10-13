// Import necessary React functions and types
import { ReactNode, FC } from "react";
// TODO: Import the useAccordionContext hook

// Define the props interface for AccordionBody
export interface AccordionBodyProps {
  children: ReactNode;
  index?: number;
}

const AccordionBody: FC<AccordionBodyProps> = ({ children, index }) => {
  // TODO:
  // - Use the useAccordionContext hook to access 'openIndex'
  // - Determine if the current item is open based on 'openIndex'

  return (
    // TODO:
    // - Conditionally render the body content based on whether the item is open
    <div className="p-4 bg-white text-gray-700 border-t border-gray-300"></div>
  );
};

export default AccordionBody;
