import { Dispatch, SetStateAction, useState } from "react";

import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import { CopyBlock, dracula } from "react-code-blocks";

const Example = () => {
    const fnc: {
        (initialState: number | (() => number)): [number, Dispatch<SetStateAction<number>>];
        (): [number | undefined, Dispatch<SetStateAction<number | undefined>>];
    } = useState<number>;

    const initialState = 0;

    const [count, setCount]: [number, Dispatch<SetStateAction<number>>] = fnc(initialState);

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


const BasicsStrongTyped = () => {

    const code = `
    import { Dispatch, SetStateAction, useState } from "react";

      const Example = () => {
    const fnc: {
        (initialState: number | (() => number)): [number, Dispatch<SetStateAction<number>>];
        (): [number | undefined, Dispatch<SetStateAction<number | undefined>>];
    } = useState<number>;

     const initialState = 0;

    const [count, setCount]: [number, Dispatch<SetStateAction<number>>] = fnc(initialState);


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
 `;
    const styling = `
  const Example = () => {

    return (
        <div className="container">
            <h1>Example UseState</h1>

            <p>Current Count: 1</p>
            <button
                className="btn btn-primary"
            >
                Increment
            </button>
        </div>
    );
} 
  `;

    const [language,] = useState("tsx");
    const [languageDemo,] = useState(code);
    const [lineNumbers] = useState(true);

    return (
        <div className="container">


            <Container className="mt-4">
                <Row>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Looking at UseState">
                            <Example />
                        </Tab>
                        <Tab eventKey="code" title="Visual Code">
                            <h1> Example Visual Code</h1>
                            <CopyBlock
                                language={language}
                                text={languageDemo}
                                showLineNumbers={lineNumbers}
                                theme={dracula}
                                codeBlock
                            />
                        </Tab>
                        <Tab eventKey="styling" title="styling">
                            <h1>Styling</h1>
                            <h1> Example Visual Code</h1>
                            <CopyBlock
                                language={'css'}
                                text={styling}
                                showLineNumbers={lineNumbers}
                                theme={dracula}
                                codeBlock
                            />
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
}

export default BasicsStrongTyped;