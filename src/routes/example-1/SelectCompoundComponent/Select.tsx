import { FC, ReactNode } from "react";
import Option, { OptionProps } from "../shared/Option";

interface SelectProps {
  children: ReactNode;
}
interface SelectComponent extends React.FC<SelectProps> {
  Option: React.FC<OptionProps>;
}
const Select: SelectComponent = ({ children }) => (
  <select className="w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
    {children}
  </select>
);

Select.Option = Option;

export default Select;
