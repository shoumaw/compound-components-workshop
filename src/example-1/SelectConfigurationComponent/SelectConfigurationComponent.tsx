const Select = ({
  options,
}: {
  options: { label: string; value: string }[];
}) => {
  return (
    <select>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
