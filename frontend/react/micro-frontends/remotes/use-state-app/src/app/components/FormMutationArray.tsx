import { useState } from 'react';
import { DraftFunction, useImmer } from 'use-immer';


interface Todo {
    id: number;
    title: string;
    done: boolean;
}

const AddTodo = ({ addFnc }: { addFnc: (fn: DraftFunction<Todo[]>) => void }) => {
    const [title, setTitle] = useState('');



    const handleAddTodo = () => {
        if (title.trim() === '') return;

        addFnc((draft: Todo[]) => {
            const newTodo: Todo = {
                id: draft.length + 1,
                title: title.trim(),
                done: false
            };
            draft.push(newTodo);
        });
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

const Task = ({ todo, onChange }: { todo: Todo, onChange: (fn: DraftFunction<Todo[]>) => void }) => {

    const [isEditing, setIsEditing] = useState(false);


    const toggleTodo = (id: number) => {
        onChange((draft: Todo[]) => {
            const found: Todo | undefined = draft.find(t => t.id === id);
            if (found) {
                found.done = !found.done;
            }
        });
    };


    const removeTodo = (id: number) => {
        onChange((draft: Todo[]) => {
            const index = draft.findIndex(t => t.id === id);
            if (index !== -1) {
                draft.splice(index, 1);
            }
        });
    };


    const getContent: () => JSX.Element = () => {
        const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange((draft: Todo[]) => {
                const found: Todo | undefined = draft.find(t => t.id === todo.id);
                if (found) {
                    found.title = e.target.value;
                }
            });
        }


        if (isEditing) {
            return (
                <>
                    <input className="form-control"
                        value={todo.title}
                        onChange={onChangeTitle}
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
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                />
                {getContent()}
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
    );
}


const initialTodos: Todo[] = [
    { id: 1, title: 'Learn React', done: false },
    { id: 2, title: 'Learn TypeScript', done: false },
    { id: 3, title: 'Build a micro-frontend', done: false }
];
const Example = () => {
    const [todos, updateTodos] = useImmer<Todo[]>(initialTodos);
    return (
        <div>
            <h2>Todo List</h2>
            <AddTodo addFnc={updateTodos} />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Task todo={todo} onChange={updateTodos} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
const FormMutationArray = () => {
    return (
        <div className="container">
            <h1>Todo List with Immer</h1>
            <Example />
        </div>
    );
}
export default FormMutationArray;