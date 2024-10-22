import { Fragment } from "react";

interface SelectGenericProps<T extends object> {
  options: T[];
  renderOption: (option: T) => JSX.Element;
}

function SelectGeneric<TData extends object>({
  options,
  renderOption,
}: SelectGenericProps<TData>) {
  return (
    <select className="w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
      {options.map((option) => renderOption(option))}
    </select>
  );
}
export default SelectGeneric;
