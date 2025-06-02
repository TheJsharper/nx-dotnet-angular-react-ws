
import { Route, Routes } from 'react-router-dom';


import './app.module.scss';
import { Chat } from './components/Chat';
import { Form } from './components/Form';
import { Menu } from './components/Menu';
import { Messages } from './components/Messages';

export const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route index path="/" element={<> <h1>Hello HOme</h1></>} />
        <Route path="form" element={<Form />} />
        <Route path="messages" element={<Messages />} />
        <Route path="chat" element={<Chat />} />


      </Routes>
    </>
  )
}
export {Contact} from './components/ContactForm'
