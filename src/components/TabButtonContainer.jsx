import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function TabButtonContainer() {
  const [selected, setSelected] = useState();
  const handleClick = (tabSelected) => {
    //tabSelected = "components", "jsx", "props", "state"
    setSelected(tabSelected);
    // console.log(selected);
  };
  let tabContent = <p>Please select a topic.</p>;

  if (selected) {
    tabContent = (
      <div className="tab">
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttonContainer="menu"
        button={
          <>
            <TabButton
              isSelected={selected === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selected === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selected === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
            <TabButton
              isSelected={selected === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
          </>
        }
      ></Tabs>
      {tabContent}
    </Section>
  );
}
