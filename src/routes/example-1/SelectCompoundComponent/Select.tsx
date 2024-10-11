import { ReactNode } from "react";
import Option from "./Option";

const Select = ({ children }: { children: ReactNode }) => (
  <select>{children}</select>
);

Select.Option = Option;

export default Select;
