import { CORE_CONCEPTS } from "../../data";
import Section from "../Section";
import CoreConcept from "./CoreConcepts";

export default function CoreConceptContainer() {
  return (
    <Section id="core-concepts" title="Core concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => {
          return <CoreConcept key={concept.title} {...concept} />;
        })}
      </ul>
    </Section>
  );
}

{
  /* <CoreConcept
      title={CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description}
      img={CORE_CONCEPTS[0].image}
    /> */
}
{
  /* <CoreConcept {...CORE_CONCEPTS[0]} />
    <CoreConcept {...CORE_CONCEPTS[1]} />
    <CoreConcept {...CORE_CONCEPTS[2]} />
    <CoreConcept {...CORE_CONCEPTS[3]} /> */
}
