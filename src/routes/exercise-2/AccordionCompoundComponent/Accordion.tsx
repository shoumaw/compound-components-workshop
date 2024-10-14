import { ReactNode, FC } from "react";

export interface AccordionProps {
  alwaysOpen?: boolean;
  children: ReactNode;
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
