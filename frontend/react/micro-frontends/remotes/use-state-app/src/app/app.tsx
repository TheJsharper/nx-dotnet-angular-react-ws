
import { Route, Routes } from 'react-router-dom';



import './app.module.scss';
import Basic from './components/Basics';
import BasicsStrongTyped from './components/BasicsStrongTyped';
import { Chat } from './components/Chat';
import Counter from './components/Counter';
import CounterUpdateBasedPrevious from './components/CounterUpdateBasedPrevious';
import { Form } from './components/Form';
import FormNestedObject from './components/FormNestedObject';
import FormObject from './components/FormObject';
import { Menu } from './components/Menu';
import { Messages } from './components/Messages';
import Text from './components/Text';
import FormArray from './components/FormArray';
import FormMutationArray from './components/FormMutationArray';

export const App = () => {
  
  return (
    
      <div className="d-flex  flex-col gap-2 m-2  min-vh-100  "   >
        <Menu />
        <Routes >
          <Route index path="/" element={<> <h1>Hello HOme</h1></>} />
          <Route path="form" element={<Form  />} />
          <Route path="messages" element={<Messages />} />
          <Route path="chat" element={<Chat />} />
          <Route path="basic" element={<Basic />} />
          <Route path="basic-st" element={<BasicsStrongTyped />} />
          <Route path="counter" element={<Counter />} />
          <Route path="text" element={<Text />} />
          <Route path="simple-counter-update" element={<CounterUpdateBasedPrevious />} />
          <Route path="simple-form-object" element={<FormObject />} />
          <Route path="simple-form-nested-object" element={<FormNestedObject />} />
          <Route path="simple-form-array-object" element={<FormArray />} />
          <Route path="simple-form-array-object-updater-immer" element={<FormMutationArray />} />
        </Routes>
      </div>
   
  )
}
export { RouterChildren } from './components/RouterChildren';

