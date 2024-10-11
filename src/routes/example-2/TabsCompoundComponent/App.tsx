import React from "react";
import Tabs from "./Tabs";

{
  /* <Tabs>
  <Tabs.List>
    <Tabs.Tab onClick={() => setActiveTabIndex(0)}>Tab 1</Tabs.Tab>
    <Tabs.Tab onClick={() => setActiveTabIndex(1)}>Tab 2</Tabs.Tab>
  <Tabs.List>

  <Tabs.Content>
    <Tabs.Panel isVisible={activeTabIndex === 0}>Content for Tab 1</Tabs.Panel>
    <Tabs.Panel isVisible={activeTabIndex === 1}>Content for Tab 2</Tabs.Panel>
  </Tabs.Content>
</Tabs> */
}

const App: React.FC = () => {
  return (
    <Tabs initialActiveTab={0}>
      {/* <div>Extra content</div> */}
      <Tabs.List>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab>Tab 2</Tabs.Tab>
      </Tabs.List>

      <Tabs.Content>
        <Tabs.Panel>Content for Tab 1</Tabs.Panel>
        <Tabs.Panel>Content for Tab 2</Tabs.Panel>
      </Tabs.Content>
    </Tabs>
  );
};

export default App;
