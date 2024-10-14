import React from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4 font-bold">
      <h1>Accordion Compound Component</h1>
      <Accordion>
        <AccordionItem>
          <AccordionHeader>What is React?</AccordionHeader>
          <AccordionBody>
            React is a JavaScript library for building user interfaces.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>What are Compound Components?</AccordionHeader>
          <AccordionBody>
            Compound Components are a React pattern that allows multiple
            components to work together as a cohesive unit.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>Why use TypeScript with React?</AccordionHeader>
          <AccordionBody>
            TypeScript provides static typing, which helps catch errors early
            and improves developer experience with better tooling.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
