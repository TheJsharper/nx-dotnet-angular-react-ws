import { useState } from "react";

import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import { CopyBlock, dracula } from "react-code-blocks";

const Example = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h1>Example UseState</h1>

            <p>Current Count: {count}</p>
            <button
                className="btn btn-primary"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}


const Basic = () => {

    const code = `
    const Example = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h1>Example UseState</h1>

            <p>Current Count: {count}</p>
            <button
                className="btn btn-primary"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}
    
    `
    const [language,/* changeLanguage*/] = useState("tsx");
    const [languageDemo, /* changeDemo*/] = useState(code);
    const [lineNumbers,/* toggleLineNumbers*/] = useState(true);

    return (
        <div className="container">


            <Container className="mt-4">
                <Row>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Looking at UseState">
                            <Example />
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <p>This is the profile tab content.</p>
                            <CopyBlock
                                language={language}
                                text={languageDemo}
                                showLineNumbers={lineNumbers}
                                theme={dracula}
                                codeBlock
                            />
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <p>This is the contact tab content.</p>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
}

export default Basic;