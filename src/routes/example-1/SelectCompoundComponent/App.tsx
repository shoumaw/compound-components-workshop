import React from "react";
import Select from "./Select";
//As a side note, a lot of UI libraries use . for their compound component API
//This approach is strictly optional and you can write your component however you prefer. It doesn’t affect the end result in any significant way.
const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4 font-bold">
      <h1>Select Compound Component</h1>
      <Select>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    </div>
  );
};

export default App;
