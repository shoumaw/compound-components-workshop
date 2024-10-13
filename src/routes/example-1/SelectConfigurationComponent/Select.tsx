import { FC } from "react";
import Option from "../shared/Option";

interface Option {
  label: string;
  value: string;
}
interface SelectProps {
  options: Option[];
}
const Select: FC<SelectProps> = ({ options }) => {
  return (
    <select className="w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </select>
  );
};

export default Select;
