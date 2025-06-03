import { Dispatch, SetStateAction, useState } from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import { CopyBlock, dracula } from "react-code-blocks";

const Example = () => {
    const [count, setCount]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);

    const handlerClickIncr = () => {
        setCount(count + 1);

    }
    const handlerClickDecr = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button className="btn btn-primary" onClick={handlerClickIncr}>Increment</button>
            <button className="btn btn-danger" onClick={handlerClickDecr}>Decrement</button>
        </div>
    );
}



const Counter = () => {
    const code = `  
import { Dispatch, SetStateAction, useState } from "react";

const Example = () => {
    const [count, setCount]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);

    const handlerClickIncr = () => {
        setCount(count + 1);

    }
    const handlerClickDecr = () => {
        setCount(count - 1);    
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handlerClickIncr}>Increment</button>
            <button onClick={handlerClickDecr}>Decrement</button>
        </div>
    );
}


`;
    const styling = `
    const Example = () => {

    return (
        <div>
            <h1>Counter: {1}</h1>
            <button className="btn btn-primary" >Increment</button>
            <button className="btn btn-danger">Decrement</button>
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




export default Counter;