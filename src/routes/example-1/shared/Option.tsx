import { ReactNode } from "react";

const Option = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => <option value={value}>{children}</option>;

export default Option;
