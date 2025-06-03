
import React, { useState } from 'react';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';
import { CopyBlock, dracula } from 'react-code-blocks';

const Example = () => {

    const initialText = 'Hello, World!';

    const [text, setText] = useState(initialText);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    return (
        <div className="container">

            <h2>Text Component</h2>
            <div className="row">

                <div className="col">
                    <p>Initial Text: {initialText}</p>
                </div>
                <div className="col">
                    <p>Current Text: {text}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label className='col-form-label' htmlFor="text"> Text</label>
                </div>
                <div className="col">
                    <input className='form-control'
                        type="text"
                        value={text}
                        onChange={handleChange}
                        placeholder="Type something..." />
                </div>
            </div>
            <p>{text}</p>
        </div>
    );
}



const Text = () => {
    const code = `  
const Example = () => {

    const initialText = 'Hello, World!';

    const [text, setText] = useState(initialText);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    return (
        <div className="text">

            <h2>Text Component</h2>
            <div className="row">

                <div className="col">
                    <p>Initial Text: {initialText}</p>
                </div>
                <div className="col">
                    <p>Current Text: {text}</p>
                </div>
            </div>
            <div className="row">



                <div className="col">
                    <label className='col-form-label' htmlFor="text"> Text</label>
                </div>
                <div className="col">
                    <input className='form-control'
                        type="text"
                        value={text}
                        onChange={handleChange}
                        placeholder="Type something..." />
                </div>
            </div>
            <p>{text}</p>
        </div>
    );
}


`;
    const styling = `
  const Example = () => {

    

    
    return (
        <div className="text">

            <h2>Text Component</h2>
            <div className="row">

                <div className="col">
                    <p>Initial Text: {"Text"}</p>
                </div>
                <div className="col">
                    <p>Current Text: {"Text"}</p>
                </div>
            </div>
            <div className="row">



                <div className="col">
                    <label className='col-form-label' htmlFor="text"> Text</label>
                </div>
                <div className="col">
                    <input className='form-control'
                        type="text"
                        value={"text"}
                        placeholder="Type something..." />
                </div>
            </div>
            <p>{"text"}</p>
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






export default Text;