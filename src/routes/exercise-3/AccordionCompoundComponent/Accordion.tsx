import { ReactNode, FC, ReactElement } from "react";
import { AccordionPanelProps } from "./AccordionPanel";

export interface AccordionProps {
  multipleOpen?: boolean;
  children:
    | ReactElement<AccordionPanelProps>
    | Array<ReactElement<AccordionPanelProps>>;
  collapseAll?: boolean;
}
const Accordion: FC<AccordionProps> = ({
  multipleOpen = false,
  collapseAll = false,
  children,
}) => {
  return <></>;
};

export default Accordion;
