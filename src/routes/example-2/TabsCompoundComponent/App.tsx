import React from "react";
import { Tabs, TabsList, Tab, TabPanel } from "./ContextDriven/Tabs";
// import { TabItem, Tabs } from "./ContextAndChildren/Tabs";

const App: React.FC = () => {
  return (
    // ContextDriven
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

    // ContextAndChildren
    // <Tabs>
    //   <TabItem value="tab-1" label="First Tab">
    //     Content for the first tab
    //   </TabItem>
    //   <TabItem value="tab-2" label="Second Tab">
    //     Content for the second tab
    //   </TabItem>
    //   <TabItem value="tab-3" label="Third Tab">
    //     Content for the third tab
    //   </TabItem>
    // </Tabs>
  );
};

export default App;
