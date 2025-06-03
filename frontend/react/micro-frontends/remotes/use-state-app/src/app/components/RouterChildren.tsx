import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Menu } from "./Menu";
import { Form } from "./Form";
import { Messages } from "./Messages";
import { Chat } from "./Chat";
import Basic from "./Basics";
import BasicsStrongTyped from "./BasicsStrongTyped";

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
      {
        path: 'basic',
        element: <Basic />
      },
      {
        path: 'basic-st',
        element: <BasicsStrongTyped />
      },


    ],
  }


], { initialEntries: [window.location.pathname.replace('/use-state-app', '') ?? '/'], future: { v7_relativeSplatPath: true } });



export const RouterChildren = () => {
  return (<RouterProvider router={router} />)
}