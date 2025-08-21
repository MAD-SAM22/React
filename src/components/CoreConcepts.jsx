import { CORE_CONCEPTS } from '../data.js';
import CoreConept from './CoreConcept.jsx';

export default function CoreConcepts() {
  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConept
            key={concept.title}
            image={concept.image}
            title={concept.title}
            description={concept.description}
          />
        ))}
      </ul>
    </section>
  );
}