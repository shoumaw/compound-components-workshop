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
    <select>
      {options.map((option) => (
        <Fragment>{renderOption(option)}</Fragment>
      ))}
    </select>
  );
}
