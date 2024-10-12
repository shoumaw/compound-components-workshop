import React from "react";
import Accordion from "./AccordionCompoundComponent/Accordion";

const App: React.FC = () => {
  return (
    <div>
      <h1>Accordion Compound Component</h1>
      <Accordion>
        <Accordion.Item>
          <Accordion.Item.Header>What is React?</Accordion.Item.Header>
          <Accordion.Item.Body>
            React is a JavaScript library for building user interfaces.
          </Accordion.Item.Body>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Item.Header>
            What are Compound Components?
          </Accordion.Item.Header>
          <Accordion.Item.Body>
            Compound Components are a React pattern that allows multiple
            components to work together as a cohesive unit.
          </Accordion.Item.Body>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Item.Header>
            Why use TypeScript with React?
          </Accordion.Item.Header>
          <Accordion.Item.Body>
            TypeScript provides static typing, which helps catch errors early
            and improves developer experience with better tooling.
          </Accordion.Item.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default App;
