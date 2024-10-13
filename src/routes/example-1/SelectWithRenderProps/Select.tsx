import { FC } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  renderOption: (option: Option) => JSX.Element;
}

const Select: FC<SelectProps> = ({ options, renderOption }) => {
  return (
    <select className="w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
      {options.map((option) => renderOption(option))}
    </select>
  );
};

export default Select;
