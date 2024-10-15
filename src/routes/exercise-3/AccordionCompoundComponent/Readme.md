# Exercise: Implement an Accordion Component Using Context and Children API

## Overview

In this exercise, you will build a fully functional Accordion component in React using both the Context API and the Children API.

## Objectives

- **Implement** an `Accordion` component that manages the state of its panels.
- **Use** the Context API to share state between `AccordionPanel`, `AccordionTitle`, and `AccordionContent`.
- **Leverage** the Children API to process and render child components.
- **Support** configurations such as `alwaysOpen` and `collapseAll`.

## Instructions

### 1. Implement the `Accordion` Component (`Accordion.tsx`)

- **State Management:** Use the `useState` hook to manage which panel(s) are open.
  - If `alwaysOpen` is `false`, only one panel should be open at a time.
  - If `alwaysOpen` is `true`, multiple panels can be open simultaneously.
  - If `collapseAll` is `true`, all panels should be closed initially.
- **Processing Children:**
  - Use `React.Children.map` and `React.cloneElement` to iterate over `children` and pass necessary props to `AccordionPanel`.
- **Props:**
  - `alwaysOpen`: Allows multiple panels to be open at once.
  - `collapseAll`: All panels are collapsed on initial render.

### 2. Implement the `AccordionPanel` Component (`AccordionPanel.tsx`)

- **Context Provider:** Use `AccordionPanelContext.Provider` to pass down `isOpen`, `setOpen`, and `alwaysOpen` to child components.
- **State Management:**
  - If `alwaysOpen` is `true`, manage local `isOpen` state within each `AccordionPanel`.
  - If `alwaysOpen` is `false`, rely on the state managed by `Accordion`.
- **Props:**
  - Receive `isOpen` and `setOpen` from `Accordion` or manage locally based on `alwaysOpen`.

### 3. Implement the `AccordionPanelContext` (`AccordionPanelContext.tsx`)

- **Create Context:** Use `createContext` to create `AccordionPanelContext`.
- **Custom Hook:** Implement `useAccordionContext` to consume context in `AccordionTitle` and `AccordionContent`.

### 4. Implement the `AccordionTitle` Component (`AccordionTitle.tsx`)

- **Consume Context:** Use `useAccordionContext` to access `isOpen` and `setOpen`.
- **Render Logic:**
  - Display the title.
  - Change styling based on `isOpen`.
- **Interaction:**
  - On click, toggle the panel by calling `setOpen`.

### 5. Implement the `AccordionContent` Component (`AccordionContent.tsx`)

- **Consume Context:** Use `useAccordionContext` to access `isOpen`.
- **Render Logic:**
  - Show or hide content based on `isOpen`.
