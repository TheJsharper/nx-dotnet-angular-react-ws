
import { Route, Routes } from 'react-router-dom';
import React from 'react';



import './app.module.scss';
import { Chat } from './components/Chat';
import { Form } from './components/Form';
import { Menu } from './components/Menu';
import { Messages } from './components/Messages';
import Basic from './components/Basics';
import BasicsStrongTyped from './components/BasicsStrongTyped';

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
        </Routes>
      </div>
   
  )
}
export {RouterChildren } from './components/RouterChildren'
