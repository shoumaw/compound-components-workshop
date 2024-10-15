# Breadcrumbs

## API

```tsx
<Breadcrumbs>
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <span>Product Details</span>
</Breadcrumbs>
```

### Notes

- Easy to use just wrap your breadcrumb items inside the Breadcrumbs component.
- You can use any elements like <a>, <span>, or even custom components.
- Separators are automatically added between items.
- Doesn't require additional breadcrumb-specific components.

### Additional Components

You could also provide a `BreadcrumbLink` and `BreadcrumbText` component to go with it but they'd be cosmetic only

```ts
<Breadcrumbs>
  <BreadcrumbLink href="/">Home</BreadcrumbLink>
  <BreadcrumbLink href="/products">Products</BreadcrumbLink>
  <BreadcrumbText>Product Details</BreadcrumbText>
</Breadcrumbs>
```

- These components are mainly for semantic clarity and styling purposes.
- You can still pass any content as children to these components.
