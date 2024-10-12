import { ReactNode } from "react";
import Option from "../shared/Option";

const Select = ({ children }: { children: ReactNode }) => (
  <select>{children}</select>
);

Select.Option = Option;

export default Select;
