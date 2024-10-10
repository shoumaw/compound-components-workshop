const Select = ({ renderOptions }: { renderOptions: () => JSX.Element }) => {
  return <select>{renderOptions()}</select>;
};

export default Select;
