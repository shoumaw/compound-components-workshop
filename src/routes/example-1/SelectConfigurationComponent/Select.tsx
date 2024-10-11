import Option from "./Option";

const Select = ({
  options,
}: {
  options: { label: string; value: string }[];
}) => {
  return (
    <select>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </select>
  );
};

export default Select;
