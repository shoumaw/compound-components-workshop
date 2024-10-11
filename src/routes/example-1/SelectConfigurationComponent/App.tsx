import React from "react";

import Select from "./Select";
const App: React.FC = () => {
  return (
    <Select
      options={[
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
      ]}
    />
  );
};

export default App;
