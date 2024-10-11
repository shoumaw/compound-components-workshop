const Select = ({
  options,
  renderOption,
}: {
  options: { label: string; value: string }[];
  renderOption: (option: { label: string; value: string }) => JSX.Element;
}) => {
  return <select>{options.map((option) => renderOption(option))}</select>;
};

export default Select;
