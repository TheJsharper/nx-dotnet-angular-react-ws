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

   const handlleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("Form submitted:", form);
    }

    return (
        <div>
            <h1>Form Object Example</h1>

            <pre>
                <code>
                    {JSON.stringify(form, null, 2)}
                </code>
            </pre>

            <form style={{marginRight:"0", marginLeft:"0", borderWidth:"1px", borderRadius:"var(--bs-border-radius)", borderStyle:"solid", padding:"50px"}}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="firstName">First Name:</label>
                    <input className="form-control" type="text" id="firstName" name="firstName" value={form.firstName} onChange={e => { setForm({ ...form, firstName: e.target.value }) }} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="lastName">Last Name:</label>
                    <input className="form-control" type="text" id="lastName" name="lastName" value={form.lastName} onChange={e => { setForm({ ...form, lastName: e.target.value }) }} />
                </div>
                <div className="mb-3">

                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="form-control" type="email" id="email" name="email" value={form.email} onChange={e => { setForm({ ...form, email: e.target.value }) }} />
                </div>

                <button className="btn btn-success" type="submit" onClick={handlleSubmit} >Submit</button>
            </form>
        </div>
    );
}


const FormObject = () => {
    const code = `
            import React, { useState } from 'react'; 


                const Example = () => {

                    const initialForm: Form = {
                        firstName: '',
                        lastName: '',
                        email: ''
                    };
                    const [form, setForm] = useState<Form>(initialForm);

                const handlleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
                        event.preventDefault();
                        console.log("Form submitted:", form);
                    }

                    return (
                        <div>
                            <h1>Form Object Example</h1>

                            <pre>
                                <code>
                                    {JSON.stringify(form, null, 2)}
                                </code>
                            </pre>

                            <form style={{marginRight:"0", marginLeft:"0", borderWidth:"1px", borderRadius:"var(--bs-border-radius)", borderStyle:"solid", padding:"50px"}}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="firstName">First Name:</label>
                                    <input className="form-control" type="text" id="firstName" name="firstName" value={form.firstName} onChange={e => { setForm({ ...form, firstName: e.target.value }) }} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="lastName">Last Name:</label>
                                    <input className="form-control" type="text" id="lastName" name="lastName" value={form.lastName} onChange={e => { setForm({ ...form, lastName: e.target.value }) }} />
                                </div>
                                <div className="mb-3">

                                    <label className="form-label" htmlFor="email">Email:</label>
                                    <input className="form-control" type="email" id="email" name="email" value={form.email} onChange={e => { setForm({ ...form, email: e.target.value }) }} />
                                </div>

                                <button className="btn btn-success" type="submit" onClick={handlleSubmit} >Submit</button>
                            </form>
                        </div>
                    );
                }

`;
    const styling = `
            import './FormObject.css';
            import React, { useState } from 'react'; 


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

                            <pre>
                                <code>
                                    {JSON.stringify(form, null, 2)}
                                </code>
                            </pre>

                            <form style={{marginRight:"0", marginLeft:"0", borderWidth:"1px", borderRadius:"var(--bs-border-radius)", borderStyle:"solid", padding:"50px"}}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="firstName">First Name:</label>
                                    <input className="form-control" type="text" id="firstName" name="firstName"  />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="lastName">Last Name:</label>
                                    <input className="form-control" type="text" id="lastName" name="lastName" />
                                </div>
                                <div className="mb-3">

                                    <label className="form-label" htmlFor="email">Email:</label>
                                    <input className="form-control" type="email" id="email" name="email" />
                                </div>

                                <button className="btn btn-success" type="submit" >Submit</button>
                            </form>
                        </div>
                    );
                }

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