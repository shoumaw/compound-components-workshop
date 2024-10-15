import { Fragment } from "react";

interface SelectGenericProps<T extends object | string> {
  id: keyof T;
  options: T[];
  renderOption: (option: T) => JSX.Element;
}

function SelectGeneric<TData extends object>({
  options,
  renderOption,
  id,
}: SelectGenericProps<TData>) {
  return (
    <select>
      {options.map((option) => (
        <Fragment key={option[id]?.toString()}>{renderOption(option)}</Fragment>
      ))}
    </select>
  );
}
