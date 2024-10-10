import React from "react";
import Select from "./SelectCompoundComponent";
const App: React.FC = () => {
  return (
    <Select>
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
    </Select>
  );
};

export default App;
