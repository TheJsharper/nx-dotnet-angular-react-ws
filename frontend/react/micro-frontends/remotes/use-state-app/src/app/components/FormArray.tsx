import { useState } from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import { CopyBlock, dracula } from "react-code-blocks";
interface Todo {
    id: number;
    title: string;
    done: boolean;
}


const AddTodo = ({ onAddTodo }: { onAddTodo: (title: string) => void }) => {
    const [title, setTitle] = useState('');

    const handleAddTodo = () => {
        if (title.trim() === '') return;

        onAddTodo(title.trim());
        setTitle('');
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add </button>
        </div>
    );
}

const Task = ({ todo, onChange, OnDelete }: { todo: Todo, onChange: (todo: Todo) => void, OnDelete: (id: number) => void }) => {

    const [isEditing, setIsEditing] = useState(false);


    let todoContent = (<span>Loading...</span>)

    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={(e) => onChange({ ...todo, title: e.target.value })}

                />

                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>Edit</button>

            </>
        );
    }
    return (
        <>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => onChange({ ...todo, done: e.target.checked })}
            />
            {todoContent}
            <button onClick={() => OnDelete(todo.id)}>Delete</button>
        </>
    );
}

const TaskList = ({ todos, onChange, OnDelete }: { todos: Todo[], onChange: (task: Todo) => void, OnDelete: (id: number) => void }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChange}
                        OnDelete={OnDelete}

                    />
                </li>
            ))}
        </ul>
    );
}


const Example = () => {
    const initialTodos: Todo[] = [
        { id: 0, title: 'Learn React', done: false },
        { id: 1, title: 'Learn TypeScript', done: false },
        { id: 3, title: 'Build a React App', done: false }
    ];



    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    const handleAddTodo = (title: string) => {
        const newTodo: Todo = {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
            title,
            done: false
        };

        setTodos([...todos, newTodo]);
    }

    const handleChangeTodo = (updatedTodo: Todo) => {
        setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
    }

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }



    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList todos={todos} onChange={handleChangeTodo} OnDelete={handleDeleteTodo} />


        </>
    );
}


const FormArray = () => {
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

export default FormArray;