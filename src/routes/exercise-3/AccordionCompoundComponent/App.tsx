import React from "react";
import Accordion from "./Accordion";
import { AccordionPanel } from "./AccordionPanel";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionContent } from "./AccordionContent";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4 font-bold">
      <h1>Accordion Compound Component</h1>
      <Accordion>
        <AccordionPanel>
          <AccordionTitle>What is React?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              React is a JavaScript library for building user interfaces.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>What are Compound Components?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Compound Components are a React pattern that allows multiple
              components to work together as a cohesive unit.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Why use TypeScript with React?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              TypeScript provides static typing, which helps catch errors early
              and improves developer experience with better tooling.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default App;
