import React from "react";

import Select from "./Select";
import Option from "../shared/Option";
const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4 font-bold">
      <h1>Select Render Props Component</h1>
      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
        ]}
        renderOption={(option) => (
          <Option value={option.value}>{option.label}</Option>
        )}
      />
    </div>
  );
};

export default App;
