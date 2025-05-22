
import { useEffect } from 'react';
import { Route, Routes, Link, Outlet, useLocation, createMemoryRouter, RouterProvider, createBrowserRouter, } from 'react-router-dom';


export function Dashboard() {
  const navStyleClass: ({ isActive }: { isActive: boolean }) => string = ({ isActive }) => {
    return isActive ? 'list-group-item active' : 'list-group-item';
  }
  return (

    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

export const DashboardMessages = () => {
  return (
    <h1> Hello Dashboar Messages</h1>
  )
}
export const DashboardTasks = () => {
  return (
    <h1> Hello Dashboar Tasks</h1>
  )
}
/*
 function App() {
  //const history = useHistory();
 
  return (
     <div>
      <nav style={{ padding: '1rem', background: '#f8f9fa', marginBottom: '1rem' }}>
        <Link to="" style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link to="messages" style={{ marginRight: '1rem' }}>Messages</Link>
        <Link to="tasks">Tasks</Link>
      </nav>
      <Routes >

        <Route path="/" element={<Dashboard />} >

          <Route index
            path="/use-state-app/messages"
            element={<DashboardMessages />}
          />
          <Route path="/use-state-app/tasks" element={<DashboardTasks />} />
        </Route>

      </Routes >
    </div>
  );
}


const router  = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    
    children: [

      {
        path: 'messages',
        index: true,
        element: <DashboardMessages />
      },

      {
        path: 'tasks',
        element: <DashboardTasks />
      },


    ]
  }


], {basename:  "/"})


const App = ()=>{
  return (<RouterProvider router={router} />)
}
export default App;
*/

export const ContactInfo = () => {
  return (<div>
    <h1>Dashboard</h1>
    <div> <Link to="form"> Contact Form</Link> </div>
    <div> <Link to="chat"> Contact Chat</Link> </div>
    <div> <Link to="messages"> Messages </Link> </div>

    <div>
      <Outlet />
    </div>

  </div>)
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <ContactInfo />,

    children: [

      {
        path: 'form',
        index: true,
        element: <Dashboard />
      },
      {
        path: 'messages',
        element: <DashboardMessages />
      },

      {
        path: 'chat',
        element: <DashboardTasks />
      },


    ]
  }


], { basename: "/" })


export const ContactForm = () => {
  return (
    <div>
      <h1>Contact Form</h1>
    </div>
  )
}

const Contact = () => {
  return (<RouterProvider router={router} />)
}

export default Contact;