import type { FC } from "react";
import { useAccordionContext } from "./AccordionPanelContext";
import { className } from "../../../utils/className/className";

export interface AccordionTitleProps {
  children: React.ReactNode;
}
export const AccordionTitle: FC<AccordionTitleProps> = ({ children }) => {
  const { isOpen, setOpen } = useAccordionContext();

  return (
    <button
      className={className(
        "bg-transparent dark:bg-transparent flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
        {
          "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white": isOpen,
        }
      )}
      onClick={setOpen}
    >
      <h2>{children}</h2>
    </button>
  );
};
