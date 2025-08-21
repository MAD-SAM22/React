import { CORE_CONCEPTS } from './data.js';
import Header from './components/header.jsx';
import CoreConepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {

  let [selectedTopic, setselectedTopic] = useState();
  function handleSelect(selectedButton) {
    setselectedTopic(selectedButton);
  }

  let tabContent = "please select a Topic";
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>
          {EXAMPLES[selectedTopic].description}
        </p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConepts
                key={concept.title}
                image={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic == 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
        </section>
        {!selectedTopic && "please select a Topic"}
        {selectedTopic &&
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>
              {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        }

      </main>
    </div>
  );
}

export default App;
