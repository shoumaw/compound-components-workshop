import { ReactNode, FC, ReactElement } from "react";
import { AccordionPanelProps } from "./AccordionPanel";

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
  return <></>;
};

export default Accordion;
