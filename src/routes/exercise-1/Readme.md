# Exercise: Implementing a Stateless Breadcrumbs Component in React

## Overview

In this exercise, you will implement a stateless `Breadcrumbs` component in React using three different patterns:

1. **Configuration Component Pattern**
2. **Render Props Pattern**
3. **Compound Component Pattern**

For each pattern, you are provided with:

- The `BreadcrumbItem.tsx` component
- Empty `Breadcrumbs.tsx` and partially empty `App.tsx` files that you need to implement.

Your task is to fill in the `Breadcrumbs.tsx` and `App.tsx` components according to each pattern.

### 1. Compound Component Pattern

#### Tasks:
- Implement `Breadcrumbs.tsx` with a parent component that renders its children.

### 2. Configuration Component Pattern

#### Tasks:
- Implement `Breadcrumbs.tsx` that takes an items prop, which is an array of breadcrumb items.


### 3. Render Props Pattern

#### Tasks:
- Implement `Breadcrumbs.tsx` that accepts an items prop and a renderItem function.
- The renderItem function will be used to render each breadcrumb item.