import type { FC } from "react";
import { useState } from "react";
import type { AccordionProps } from "./Accordion";
import { AccordionPanelContext } from "./AccordionPanelContext";

export interface AccordionPanelProps extends AccordionProps {
  isOpen?: boolean;
  setOpen?: () => void;
}

export const AccordionPanel: FC<AccordionPanelProps> = ({
  children,
  ...props
}) => {
  const { multipleOpen } = props;
  const [isOpen, setOpen] = useState(props.isOpen);

  const value = multipleOpen
    ? {
        ...props,
        isOpen,
        setOpen: () => setOpen(!isOpen),
      }
    : props;

  return (
    <AccordionPanelContext.Provider value={value}>
      {children}
    </AccordionPanelContext.Provider>
  );
};
