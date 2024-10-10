import React from "react";

import Select from "./SelectWithRenderProps";
const App: React.FC = () => {
  return (
    <Select
      renderOptions={() => (
        <>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </>
      )}
    />
  );
};

export default App;
