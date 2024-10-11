# APIs

## ContextDriven

```tsx

<Tabs>
    <TabList>
        <Tab value='tab-1'>First Tab</Tab>
        <Tab value='tab-2'>Second Tab</Tab>
        <Tab value='tab-3'>Third Tab</Tab>
    <TabList>
    <TabPanel value='tab-1'>Content for the first tab</TabPanel>
    <TabPanel value='tab-2'>Content for the second tab</TabPanel>
    <TabPanel value='tab-3'>Content for the third tab</TabPanel>
</Tabs>

```

### Notes

- Easy to implement
- Looks very similar to how the `Tabs` render
- Incredibly flexible on what you can render inside of the tab
- Annoying that you have to keep `value` in sync across `Tab` and `TabPanel`
- Pretty verbose
- Weird to have the content for a tab as a whole spread across the JSX like this

## ContextDriven

```tsx
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
```

### Notes

- Bit harder to implement
- flexible on what you can render inside of the tab
- No `value` in sync across `Tab` and `TabPanel`
- Concise
- Content for a tab as a consolidated in one component

## On Controlling Tabs

- Navigation and Tabs are often closely related
  - If you prefer programatic Navigation `ContextAndChildren` is easier
  - If you want to you `Link` `ContextDriven` is easier via an `as` or `component` prop
