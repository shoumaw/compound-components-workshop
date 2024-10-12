import React from "react";
import { Tabs, TabsList, Tab, TabPanel } from "./Tabs";

const App: React.FC = () => {
  return (
    <>
      <h1>Context</h1>
      <Tabs>
        <TabsList>
          <Tab value="tab-1">First Tab</Tab>
          <Tab value="tab-2">Second Tab</Tab>
          <Tab value="tab-3">Third Tab</Tab>
        </TabsList>
        <TabPanel value="tab-1">Content for the first tab</TabPanel>
        <TabPanel value="tab-2">Content for the second tab</TabPanel>
        <TabPanel value="tab-3">Content for the third tab</TabPanel>
      </Tabs>
    </>
  );
};

export default App;
