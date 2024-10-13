import { FC, ReactNode } from "react";

export interface OptionProps {
  value: string;
  children: ReactNode;
}
const Option: FC<OptionProps> = ({ value, children }) => (
  <option className="text-gray-700" value={value}>
    {children}
  </option>
);

export default Option;
