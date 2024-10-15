# Exercise: Implementing a Compound `Breadcrumbs` Component in React

## Overview

In this exercise, you will implement a `Breadcrumbs` component in React using the **Compound Component Pattern**. The `Breadcrumbs` component will render a navigational list of breadcrumbs, and each breadcrumb will be represented by a `BreadcrumbItem` component.

The `Breadcrumbs` component will also accept a `separator` prop, which defines the symbol or string used to separate each `BreadcrumbItem`. You need to complete the `Breadcrumbs` component so that it correctly renders its children with separators and validates that only `BreadcrumbItem` components are passed as children.

### Goals:

- Render a list of `BreadcrumbItem` components inside the `Breadcrumbs` component.
- Insert the `separator` between each `BreadcrumbItem`, ensuring no separator is added after the last item.
- Ensure only valid `BreadcrumbItem` components are allowed as children.
- Throw an error if any invalid component or element is passed as a child of `Breadcrumbs`.

## Files

You have three files to work with:

### 1. **Breadcrumbs.tsx** (Primary File to Complete)
This is the main `Breadcrumbs` component that you need to implement. It will render the list of breadcrumbs and apply the separator between them. The structure is mostly complete, but you need to fill in the logic to properly handle the `children` and `separator`.

### 2. **BreadcrumbItem.tsx** (Provided)
This file contains the `BreadcrumbItem` component, which is the child component used inside `Breadcrumbs`. It represents individual breadcrumbs.

### 3. **App.tsx** (Provided Example)
This file contains an example of how the `Breadcrumbs` and `BreadcrumbItem` components will be used. Once your implementation is complete, this file should render a breadcrumb navigation with the correct separators.

