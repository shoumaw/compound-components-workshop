import React from "react";

import Select from "./Select";
import Option from "../shared/Option";
const App: React.FC = () => {
  return (
    <Select
      options={[
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
      ]}
      renderOption={(option) => (
        <>
          <Option value={option.value}>{option.label}</Option>
        </>
      )}
    />
  );
};

export default App;
