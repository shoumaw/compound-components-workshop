import { FC, ReactNode } from "react";

export interface AccordionHeaderProps {
  children: ReactNode;
  index?: number;
}

const AccordionHeader: FC<AccordionHeaderProps> = ({ children, index }) => {
  // TODO:
  // - Use the useAccordionContext hook to access 'openIndex' and 'setOpenIndex'
  // - Determine if the current item is open based on 'openIndex'

  // TODO:
  // - Implement a click handler that toggles the open state
  // - If the item is open, set 'openIndex' to null
  // - If the item is closed, set 'openIndex' to the current index

  return (
    <div
      className="flex justify-between items-center cursor-pointer bg-gray-100 px-4 py-2 text-lg font-semibold hover:bg-gray-200"
      onClick={() => {} /* click handler */}
    >
      {/*
        TODO:
        - Render the header content
        - Display a symbol (e.g., '+' or '-') based on whether the item is open
      */}
      {children}
      <span className="text-xl">{/* '+' or '-' based on open state */}</span>
    </div>
  );
};

export default AccordionHeader;
