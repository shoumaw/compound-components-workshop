import {
  useState,
  ReactNode,
  FC,
  useMemo,
  Children,
  cloneElement,
  ReactElement,
} from "react";
import { AccordionPanel, AccordionPanelProps } from "./AccordionPanel";
import { className } from "../../../utils/className/className";

export interface AccordionProps {
  alwaysOpen?: boolean;
  children:
    | ReactElement<AccordionPanelProps>
    | Array<ReactElement<AccordionPanelProps>>;
  collapseAll?: boolean;
}
const Accordion: FC<AccordionProps> = ({
  alwaysOpen = false,
  collapseAll = false,
  children,
}) => {
  const [isOpen, setOpen] = useState(collapseAll ? -1 : 0);
  const panels = useMemo(
    () =>
      Children.map(children, (child, i) => {
        if (child.type === AccordionPanel) {
          return cloneElement(child, {
            alwaysOpen,
            isOpen: isOpen === i,
            setOpen: () => setOpen(isOpen === i ? -1 : i),
          });
        }
      }),
    [alwaysOpen, children, isOpen]
  );

  return (
    <div
      className={className(
        "rounded-lg border divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700"
      )}
    >
      {panels}
    </div>
  );
};

export default Accordion;
