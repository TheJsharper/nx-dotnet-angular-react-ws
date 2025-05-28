
import { createMemoryRouter, Link, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';




export function Form() {

  return (

    <>
      <h1>Form</h1>

      <div >
        <Link to="../" >Back to Home</Link>
      </div>
    </>
  );
}

export const Messages = () => {
  return (<>
    <h1>  Messages</h1>

    <div >
      <Link to="../" >Back to Home</Link>
    </div>
  </>
  )
}
export const Chat = () => {
  return (<>
    <h1> Chat</h1>
    <div >
      <Link to="../" >Back to Home</Link>
    </div>
  </>
  )
}


export const Menu = () => {

  return (<div>
    <h1>Menu</h1>
    <div> <Link to="form">  Form</Link> </div>
    <div> <Link to="messages"> Messages </Link> </div>
    <div> <Link to="chat">  Chat</Link> </div>

    <div>
      <Outlet />
    </div>

  </div>)
}
const router = createMemoryRouter([
  {
    path: '/',
    element: <Menu />,

    children: [

      {
        path: 'form',
        index: true,
        element: <Form />
      },
      {
        path: 'messages',
        element: <Messages />
      },

      {
        path: 'chat',
        element: <Chat />
      },


    ],
  }


], { initialEntries: [window.location.pathname.replace('/use-state-app', '') ?? '/'], future: { v7_relativeSplatPath: true } });


export const ContactForm = () => {
  return (
    <div>
      <h1>Contact Form</h1>
    </div>
  )
}

export const Contact = () => {
  return (<RouterProvider router={router} />)
}

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
