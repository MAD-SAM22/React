import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Tabs from './Tabs.jsx';

export default function Examples() {

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
        <section id="examples">
            <h2>Examples</h2>
            <Tabs
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic == 'components'} onClick={() => handleSelect("components")}>Components</TabButton>
                        <TabButton isSelected={selectedTopic == 'jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic == 'props'} onClick={() => handleSelect("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTopic == 'state'} onClick={() => handleSelect("state")}>State</TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </section>
    );
}