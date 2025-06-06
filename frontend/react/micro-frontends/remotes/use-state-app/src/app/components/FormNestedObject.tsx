import { useState } from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import { CopyBlock, dracula } from "react-code-blocks";
interface ArtWork {
    title: string;
    city: string;
    imageUrl: string;

}


interface PersonObject {
    firstName: string;
    lastName: string;
    email: string;
    artwork: ArtWork;

}

const Example = () => {

    const initialForm: PersonObject = {
        firstName: '',
        lastName: '',
        email: '',
        artwork: {
            title: '',
            city: '',
            imageUrl: 'https://i.imgur.com/Sd1AgUOm.jpg'
        }
    };

    const [form, setForm] = useState<PersonObject>(initialForm);

    const[isSubmitted, setIsSubmitted] = useState(false);

    const handlleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        console.log("Form submitted:", form);

        setForm(initialForm);

        setIsSubmitted(true); 
    }

    const styleFormContiner = {
        marginRight: "0",
        marginLeft: "0",
        borderWidth: "1px",
        borderRadius: "var(--bs-border-radius)",
        borderStyle: "solid",
        padding: "50px"
    };

    return (
        <div>
            <h1>Form Nested Object Example</h1>

            <pre>
                <code>
                    {JSON.stringify(form, null, 2)}
                </code>
            </pre>

            <form style={{ ...styleFormContiner }}>
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
                <div className="mb-3">

                    <label className="form-label" htmlFor="title">Title</label>
                    <input className="form-control" type="text" id="title" name="title" value={form.artwork.title} onChange={e => { setForm({ ...form, artwork: { ...form.artwork, title: e.target.value } }) }} />
                </div>
                <div className="mb-3">

                    <label className="form-label" htmlFor="city">City:</label>
                    <input className="form-control" type="city" id="city" name="city" value={form.artwork.city} onChange={e => { setForm({ ...form, artwork: { ...form.artwork, city: e.target.value } }) }} />
                </div>
                <div className="mb-3">

                    <input className="form-control" type="imageUrl " id="imageUrl   " name="imageUrl   " value={form.artwork.imageUrl} onChange={e => {
                        setForm({
                            ...form, artwork: { ...form.artwork, imageUrl: e.target.value }
                        })
                    }} />
                </div>
                <div className="mb-3">

                    <label className="form-label" htmlFor="imageUrlView">Image Url</label>
                    <img width="250" height="250" src={form.artwork.imageUrl} alt={form.artwork.title} />
                </div>
                
                {isSubmitted && (
                    <div className="alert alert-success" role="alert">
                        Form submitted successfully!
                    </div>
                )}
               

                <button className="btn btn-success" type="submit" onClick={handlleSubmit} >Submit</button>
            </form>
        </div>
    );
}


const FormNestedObject = () => {
    const code = `
 interface ArtWork {
    title: string;
    city: string;
    imageUrl: string;

}


interface PersonObject {
    firstName: string;
    lastName: string;
    email: string;
    artwork: ArtWork;

}

const Example = () => {

    const initialForm: PersonObject = {
        firstName: '',
        lastName: '',
        email: '',
        artwork: {
            title: '',
            city: '',
            imageUrl: 'https://i.imgur.com/Sd1AgUOm.jpg'
        }
    };

    const [form, setForm] = useState<PersonObject>(initialForm);

    const[isSubmitted, setIsSubmitted] = useState(false);

    const handlleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        console.log("Form submitted:", form);

        setForm(initialForm);

        setIsSubmitted(true); 
    }

    const styleFormContiner = {
        marginRight: "0",
        marginLeft: "0",
        borderWidth: "1px",
        borderRadius: "var(--bs-border-radius)",
        borderStyle: "solid",
        padding: "50px"
    };

    return (
        <div>
            <h1>Form Nested Object Example</h1>

            <pre>
                <code>
                    {JSON.stringify(form, null, 2)}
                </code>
            </pre>

            <form style={{ ...styleFormContiner }}>
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
                <div className="mb-3">

                    <label className="form-label" htmlFor="title">Title</label>
                    <input className="form-control" type="text" id="title" name="title" value={form.artwork.title} onChange={e => { setForm({ ...form, artwork: { ...form.artwork, title: e.target.value } }) }} />
                </div>
                <div className="mb-3">

                    <label className="form-label" htmlFor="city">City:</label>
                    <input className="form-control" type="city" id="city" name="city" value={form.artwork.city} onChange={e => { setForm({ ...form, artwork: { ...form.artwork, city: e.target.value } }) }} />
                </div>
                <div className="mb-3">

                    <input className="form-control" type="imageUrl " id="imageUrl   " name="imageUrl   " value={form.artwork.imageUrl} onChange={e => {
                        setForm({
                            ...form, artwork: { ...form.artwork, imageUrl: e.target.value }
                        })
                    }} />
                </div>
                <div className="mb-3">

                    <label className="form-label" htmlFor="imageUrlView">Image Url</label>
                    <img width="250" height="250" src={form.artwork.imageUrl} alt={form.artwork.title} />
                </div>
                
                {isSubmitted && (
                    <div className="alert alert-success" role="alert">
                        Form submitted successfully!
                    </div>
                )}
               

                <button className="btn btn-success" type="submit" onClick={handlleSubmit} >Submit</button>
            </form>
        </div>
    );
}
`;
const styling = `

const Example = () => {

  const styleFormContiner = {
        marginRight: "0",
        marginLeft: "0",
        borderWidth: "1px",
        borderRadius: "var(--bs-border-radius)",
        borderStyle: "solid",
        padding: "50px"
    };
    
    return (
        <div>
            <h1>Form Nested Object Example</h1>

            <pre>
                <code>
                    {JSON.stringify(form, null, 2)}
                </code>
            </pre>

            <form style={{ ...styleFormContiner }}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="firstName">First Name:</label>
                    <input className="form-control" type="text" id="firstName" name="firstName"  />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="lastName">Last Name:</label>
                    <input className="form-control" type="text" id="lastName" name="lastName"  />
                </div>
                <div className="mb-3">

                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="form-control" type="email" id="email" name="email" />
                </div>
                <div className="mb-3">

                    <label className="form-label" htmlFor="title">Title</label>
                    <input className="form-control" type="text" id="title" name="title"  />
                </div>
                <div className="mb-3">

                    <label className="form-label" htmlFor="city">City:</label>
                    <input className="form-control" type="city" id="city" name="city"  />
                </div>
                <div className="mb-3">

                    <input className="form-control" type="imageUrl " id="imageUrl   " name="imageUrl"  />
                </div>
                <div className="mb-3">

                    <label className="form-label" htmlFor="imageUrlView">Image Url</label>
                    <img width="250" height="250"  />
                </div>
                
                {isSubmitted && (
                    <div className="alert alert-success" role="alert">
                        Form submitted successfully!
                    </div>
                )}
               

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

export default FormNestedObject;