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
        <div className="d-flex flex-row align-items-center justify-content-between gap-2">
            <input className="form-control"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
            />
            <button className="btn btn-info" onClick={handleAddTodo}>Add </button>
        </div>
    );
}

const Task = ({ todo, onChange, OnDelete }: { todo: Todo, onChange: (todo: Todo) => void, OnDelete: (id: number) => void }) => {

    const [isEditing, setIsEditing] = useState(false);
 
    const getContent: () => JSX.Element = () => {

        if (isEditing) {
            return (
                <>
                    <input className="form-control"
                        value={todo.title}
                        onChange={(e) => onChange({ ...todo, title: e.target.value })}

                    />

                    <button className="btn btn-success" onClick={() => setIsEditing(false)}>Save</button>
                </>
            );
        } else {
            return (
                <>
                    <label >
                        {todo.title} </label>
                    <button className="btn btn-warning" onClick={() => setIsEditing(true)}>Edit</button>

                </>
            );
        }
    }
    return (
        < div className="d-flex flex-row align-items-center justify-content-between gap-2" >
            <input className="form-check-input"
                type="checkbox"
                checked={todo.done}
                onChange={(e) => onChange({ ...todo, done: e.target.checked })}
            />
            {getContent()}
            <button className="btn btn-danger" onClick={() => OnDelete(todo.id)}>Delete</button>
        </div>
    );
}

const TaskList = ({ todos, onChange, OnDelete }: { todos: Todo[], onChange: (task: Todo) => void, OnDelete: (id: number) => void }) => {
    return (<div className="d-flex  flex-row gap-5"   >
        <ul className="list-group">
            {todos.map(todo => (
                <li className="list-group-item" key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChange}
                        OnDelete={OnDelete}

                    />
                </li>
            ))}
        </ul>

    </div>
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
        < div className="d-flex gap-5">
            <div className="d-flex flex-column gap-2">
                <AddTodo onAddTodo={handleAddTodo}   />
                <TaskList todos={todos} onChange={handleChangeTodo} OnDelete={handleDeleteTodo} />
            </div>

            <pre className="flex-fill">
                <code style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}           >
                    {JSON.stringify(todos, null, 2)}
                </code>
            </pre>
        </div>
    );
}


const FormArray = () => {
    const code = `
import { useState } from "react";

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
        <div className="d-flex flex-row align-items-center justify-content-between gap-2">
            <input className="form-control"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
            />
            <button className="btn btn-info" onClick={handleAddTodo}>Add </button>
        </div>
    );
}

const Task = ({ todo, onChange, OnDelete }: { todo: Todo, onChange: (todo: Todo) => void, OnDelete: (id: number) => void }) => {

    const [isEditing, setIsEditing] = useState(false);
 
    const getContent: () => JSX.Element = () => {

        if (isEditing) {
            return (
                <>
                    <input className="form-control"
                        value={todo.title}
                        onChange={(e) => onChange({ ...todo, title: e.target.value })}

                    />

                    <button className="btn btn-success" onClick={() => setIsEditing(false)}>Save</button>
                </>
            );
        } else {
            return (
                <>
                    <label >
                        {todo.title} </label>
                    <button className="btn btn-warning" onClick={() => setIsEditing(true)}>Edit</button>

                </>
            );
        }
    }
    return (
        < div className="d-flex flex-row align-items-center justify-content-between gap-2" >
            <input className="form-check-input"
                type="checkbox"
                checked={todo.done}
                onChange={(e) => onChange({ ...todo, done: e.target.checked })}
            />
            {getContent()}
            <button className="btn btn-danger" onClick={() => OnDelete(todo.id)}>Delete</button>
        </div>
    );
}

const TaskList = ({ todos, onChange, OnDelete }: { todos: Todo[], onChange: (task: Todo) => void, OnDelete: (id: number) => void }) => {
    return (<div className="d-flex  flex-row gap-5"   >
        <ul className="list-group">
            {todos.map(todo => (
                <li className="list-group-item" key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChange}
                        OnDelete={OnDelete}

                    />
                </li>
            ))}
        </ul>

    </div>
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
        < div className="d-flex gap-5">
            <div className="d-flex flex-column gap-2">
                <AddTodo onAddTodo={handleAddTodo}   />
                <TaskList todos={todos} onChange={handleChangeTodo} OnDelete={handleDeleteTodo} />
            </div>

            <pre className="flex-fill">
                <code style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}           >
                    {JSON.stringify(todos, null, 2)}
                </code>
            </pre>
        </div>
    );
}

`;
    const styling = `


const AddTodo = ({ onAddTodo }: { onAddTodo: (title: string) => void }) => {
   

  

    return (
        <div className="d-flex flex-row align-items-center justify-content-between gap-2">
            <input className="form-control"
                type="text"
                value={'title'}
                
                placeholder="Add a new todo"
            />
            <button className="btn btn-info" >Add </button>
        </div>
    );
}

const Task = ({ todo, onChange, OnDelete }: { todo: Todo, onChange: (todo: Todo) => void, OnDelete: (id: number) => void }) => {

    const [isEditing, setIsEditing] = useState(false);
 
    const getContent: () => JSX.Element = () => {

        if (isEditing) {
            return (
                <>
                    <input className="form-control"
                        value={todo.title}

                    />

                    <button className="btn btn-success" onClick={() => setIsEditing(false)}>Save</button>
                </>
            );
        } else {
            return (
                <>
                    <label >
                        {todo.title} </label>
                    <button className="btn btn-warning" onClick={() => setIsEditing(true)}>Edit</button>

                </>
            );
        }
    }
    return (
        < div className="d-flex flex-row align-items-center justify-content-between gap-2" >
            <input className="form-check-input"
                type="checkbox"
                checked={todo.done}
            />
            {getContent()}
            <button className="btn btn-danger" >Delete</button>
        </div>
    );
}

const TaskList = ({ todos, onChange, OnDelete }: { todos: Todo[], onChange: (task: Todo) => void, OnDelete: (id: number) => void }) => {
    return (<div className="d-flex  flex-row gap-5"   >
        <ul className="list-group">
            {todos.map(todo => (
                <li className="list-group-item" key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChange}
                        OnDelete={OnDelete}

                    />
                </li>
            ))}
        </ul>

    </div>
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
        < div className="d-flex gap-5">
            <div className="d-flex flex-column gap-2">
                <AddTodo onAddTodo={handleAddTodo}   />
                <TaskList todos={todos} onChange={handleChangeTodo} OnDelete={handleDeleteTodo} />
            </div>

            <pre className="flex-fill">
                <code style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}           >
                    {JSON.stringify(todos, null, 2)}
                </code>
            </pre>
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