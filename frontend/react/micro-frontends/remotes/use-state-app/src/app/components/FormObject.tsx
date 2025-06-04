import { useState } from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import { CopyBlock, dracula } from "react-code-blocks";

interface Form {
    firstName: string;
    lastName: string;
    email: string;

}

const Example = () => {
    const initialForm: Form = {
        firstName: '',
        lastName: '',
        email: ''
    };
    const [form, setForm] = useState<Form>(initialForm);

    return (
        <div>
            <h1>Form Object Example</h1>
            <form>
                <label htmlFor="firstName">Name:</label>
                <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={e => { setForm({ ...form, firstName: e.target.value }) }} />

                <label htmlFor="lastName">Name:</label>
                <input type="text" id="lastName" name="lastName" value={form.firstName} onChange={e => { setForm({ ...form, lastName: e.target.value }) }} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={form.email} onChange={e => { setForm({ ...form, email: e.target.value }) }} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


const FormObject = () => {
    const code = `
import React, { useState } from 'react'; 


interface Form {
    firstName: string;
    lastName: string;
    email: string;

}

const Example = () => {
    const initialForm: Form = {
        firstName: '',
        lastName: '',
        email: ''
    };
    const [form, setForm] = useState<Form>(initialForm);

    return (
        <div>
            <h1>Form Object Example</h1>
            <form>
                <label htmlFor="firstName">Name:</label>
                <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={e => { setForm({ ...form, firstName: e.target.value }) }} />

                <label htmlFor="lastName">Name:</label>
                <input type="text" id="lastName" name="lastName" value={form.firstName} onChange={e => { setForm({ ...form, lastName: e.target.value }) }} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={form.email} onChange={e => { setForm({ ...form, email: e.target.value }) }} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

`;
    const styling = `
import './FormObject.css';


`;



    const [language] = useState("tsx");
    const [languageDemo] = useState(code);
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

};

export default FormObject;