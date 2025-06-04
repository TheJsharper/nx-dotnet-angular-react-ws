import { useState } from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import { CopyBlock, dracula } from "react-code-blocks";


const Example = () => {
    const initialCount = 0;

    const initialHistoryIncrement = [initialCount];

    const initialHistoryDecrement = [initialCount];

    const [currentHistoryIncrement, setCurrentHistoryIncrement] = useState(initialHistoryIncrement);

    const [currentHistoryDecrement, setCurrentHistoryDecrement] = useState(initialHistoryDecrement);

    const [count, setCount] = useState(initialCount);


    const incrementCount = () => {
        setCount(prevCount => {
            const newCount = prevCount + 1;
            setCurrentHistoryIncrement(prevHistory => [...prevHistory, newCount]);
            setCurrentHistoryDecrement(prevHistory => [...prevHistory, newCount]);
            return newCount
        });
    }

    const decrementCount = () => {
        setCount(prevCount => {
            const newCount = prevCount - 1;
            setCurrentHistoryIncrement(prevHistory => [...prevHistory, newCount]);
            setCurrentHistoryDecrement(prevHistory => [...prevHistory, newCount]);
            return newCount
        });
    }


    return (
        <div className="container mt-4 ">
            <div className="d-flex flex-column ">
                <h1 className="justify-content-center">Counter Update Based on Previous Value</h1>
                <div className="d-flex item-center justify-content-center">
                    <span className="badge bg-primary ">Current Count: {count}</span>
                </div>
                <div className="d-flex flex-column mt-4">
                    <h5> <span className="badge bg-success"> History Increment </span> </h5>
                    <div>
                        {currentHistoryIncrement.map((value, index) => (
                            <span className="badge bg-success me-2" key={index}> {"[" + index + 1}:{value + "]"}</span>
                        ))}
                    </div>
                </div>
                <div className="d-flex flex-column mt-4">
                    <h5> <span className="badge bg-danger"> History Decrement </span> </h5>
                    <div>
                        {currentHistoryDecrement.map((value, index) => (

                            <span className="badge bg-danger me-2" key={index}> {"[" + index + 1}:{value + "]"}</span>
                        ))}
                    </div>
                </div>
                <div className="d-flex   justify-content-between mt-4">
                    <button className="btn btn-success" onClick={incrementCount}>Increment</button>
                    <button className="btn btn-danger" onClick={decrementCount}>Decrement</button>
                </div>
            </div>
        </div>
    );
}



const CounterUpdateBasedPrevious = () => {
    const code = `  
import { Dispatch, SetStateAction, useState } from "react";

const Example = () => {
    const initialCount = 0;

    const initialHistoryIncrement = [initialCount];

    const initialHistoryDecrement = [initialCount];

    const [currentHistoryIncrement, setCurrentHistoryIncrement] = useState(initialHistoryIncrement);

    const [currentHistoryDecrement, setCurrentHistoryDecrement] = useState(initialHistoryDecrement);

    const [count, setCount] = useState(initialCount);


    const incrementCount = () => {
        setCount(prevCount => {
            const newCount = prevCount + 1;
            setCurrentHistoryIncrement(prevHistory => [...prevHistory, newCount]);
            setCurrentHistoryDecrement(prevHistory => [...prevHistory, newCount]);
            return newCount
        });
    }

    const decrementCount = () => {
        setCount(prevCount => {
            const newCount = prevCount - 1;
            setCurrentHistoryIncrement(prevHistory => [...prevHistory, newCount]);
            setCurrentHistoryDecrement(prevHistory => [...prevHistory, newCount]);
            return newCount
        });
    }


    return (
        <div className="container mt-4 ">
            <div className="d-flex flex-column ">
                <h1 className="justify-content-center">Counter Update Based on Previous Value</h1>
                <div className="d-flex item-center justify-content-center">
                    <span className="badge bg-primary ">Current Count: {count}</span>
                </div>
                <div className="d-flex flex-column mt-4">
                    <h5> <span className="badge bg-success"> History Increment </span> </h5>
                    <div>
                        {currentHistoryIncrement.map((value, index) => (
                            <span className="badge bg-success me-2" key={index}> {"[" + index + 1}:{value + "]"}</span>
                        ))}
                    </div>
                </div>
                <div className="d-flex flex-column mt-4">
                    <h5> <span className="badge bg-danger"> History Decrement </span> </h5>
                    <div>
                        {currentHistoryDecrement.map((value, index) => (

                            <span className="badge bg-danger me-2" key={index}> {"[" + index + 1}:{value + "]"}</span>
                        ))}
                    </div>
                </div>
                <div className="d-flex   justify-content-between mt-4">
                    <button className="btn btn-success" onClick={incrementCount}>Increment</button>
                    <button className="btn btn-danger" onClick={decrementCount}>Decrement</button>
                </div>
            </div>
        </div>
    );
}


`;
const styling = `
 const Example = () => {
    return (
        <div className="container mt-4 ">
            <div className="d-flex flex-column ">
                <h1 className="justify-content-center">Counter Update Based on Previous Value</h1>
                <div className="d-flex item-center justify-content-center">
                    <span className="badge bg-primary ">Current Count: {1}</span>
                </div>
                <div className="d-flex flex-column mt-4">
                    <h5> <span className="badge bg-success"> History Increment </span> </h5>
                    <div>
                        {currentHistoryIncrement.map((value, index) => (
                            <span className="badge bg-success me-2" key={index}> {"[" + index + 1}:{value + "]"}</span>
                        ))}
                    </div>
                </div>
                <div className="d-flex flex-column mt-4">
                    <h5> <span className="badge bg-danger"> History Decrement </span> </h5>
                    <div>
                        {currentHistoryDecrement.map((value, index) => (

                            <span className="badge bg-danger me-2" key={index}> {"[" + index + 1}:{value + "]"}</span>
                        ))}
                    </div>
                </div>
                <div className="d-flex   justify-content-between mt-4">
                    <button className="btn btn-success" >Increment</button>
                    <button className="btn btn-danger" >Decrement</button>
                </div>
            </div>
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

export default CounterUpdateBasedPrevious;
