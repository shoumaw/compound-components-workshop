import React from "react";
import Select from "./Select";
import Option from "../shared/Option";

interface OptionType {
  value: string;
  label: string;
}

const App: React.FC = () => {
  const options: OptionType[] = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ];

  return (
    <div className="flex flex-col gap-y-4 font-bold">
      <h1>Select Generic Render Props Component</h1>
      <Select<OptionType>
        options={options}
        renderOption={(option) => (
          <Option value={option.value}>{option.label}</Option>
        )}
      />
    </div>
  );
};

export default App;
