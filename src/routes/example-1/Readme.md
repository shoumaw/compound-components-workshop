# Patterns

## Configuration Component

```tsx

      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
        ]}
      />

```

### Notes

- Easy to implement: Straightforward to pass options through an options array.
- Separation of concerns: Keeps the configuration of options separate from the Select rendering.
- Clear and predictable: You know exactly what the Select will render based on the options prop.
- Limited flexibility: Rendering custom options may require additional customization, as the structure is predefined.
- Easy to maintain: Centralized control over options makes it easy to modify or add new ones.

## Render Props

```tsx

      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
        ]}
        renderOption={(option) => (
            <Option value={option.value}>{option.label}</Option>
        )}
      />
```

### Notes

- Flexible rendering: You can control how each option is rendered, allowing for custom structures and components.
- Customizable: Easily apply additional styles or complex markup to individual options.
- Slightly more complex: The renderOption prop introduces some complexity compared to the configuration approach but is more powerful.
- Better for dynamic options: If you need to apply specific behaviors or conditional logic for rendering options, this pattern is ideal.

## Compound Component

```tsx
      <Select>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
```

### Notes

- Modular and flexible: This allows options to be directly written inside the Select, making it easy to control how each one looks.
- Encapsulated: The structure for each option is consolidated, making it more intuitive to manage without passing data as props.
- No value sync issues: Unlike in Tabs, you don’t need to manage value syncing across multiple components.
- Clear structure: Easy to see which options are part of the Select just by looking at the JSX structure.
- Potentially verbose: This approach could get long-winded if there are many options, but it provides the most control over rendering.


