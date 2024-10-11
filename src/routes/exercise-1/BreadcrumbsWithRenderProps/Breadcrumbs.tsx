import React from "react";

interface BreadcrumbsProps {
  items: { href?: string; text: string }[];
  renderItem: (
    item: { href?: string; text: string },
    isLast: boolean
  ) => JSX.Element;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, renderItem }) => {
  return (
    <nav>
      <ol>
        {/*
          TODO:
          - Iterate over the 'items' array using 'map'
          - For each item, determine if it is the last item
          - Use the 'renderItem' function to render each BreadcrumbItem
          - Pass the current item and its 'isLast' status to 'renderItem'
        */}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
