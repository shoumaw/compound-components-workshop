import React from "react";

import Select from "./Select";
const App: React.FC = () => {
  return (
    <>
      <h1>Select Configuration Component</h1>
      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
        ]}
      />
    </>
  );
};

export default App;
