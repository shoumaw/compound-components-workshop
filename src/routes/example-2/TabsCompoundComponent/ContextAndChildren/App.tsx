import React from "react";
import { TabItem, Tabs } from "./Tabs";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4 font-bold">
      <h1>Context and Children</h1>
      <Tabs>
        <TabItem value="tab-1" label="First Tab">
          Content for the first tab
        </TabItem>
        <TabItem value="tab-2" label="Second Tab">
          Content for the second tab
        </TabItem>
        <TabItem value="tab-3" label="Third Tab">
          Content for the third tab
        </TabItem>
      </Tabs>
    </div>
  );
};

export default App;
