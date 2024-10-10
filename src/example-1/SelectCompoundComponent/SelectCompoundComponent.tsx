import { ReactNode } from "react";

const Select = ({ children }: { children: ReactNode }) => (
  <select>{children}</select>
);

const Option = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => <option value={value}>{children}</option>;

Select.Option = Option;

export default Select;
