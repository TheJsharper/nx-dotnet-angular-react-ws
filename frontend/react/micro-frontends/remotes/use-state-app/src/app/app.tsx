
import { useEffect } from 'react';
import { Route, Routes, Link, Outlet, useLocation,  } from 'react-router-dom';


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

export function App() {
    //const history = useHistory();
    const location = useLocation();
    useEffect(()=>{
      location.pathname.replace('/use-state-app','')
      window.history.pushState(null, '', '/');
    },[location.pathname])
  return (
    <div>
      {/* Menu */}
      <nav style={{ padding: '1rem', background: '#f8f9fa', marginBottom: '1rem' }}>
        <Link to="" style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link to="messages" style={{ marginRight: '1rem' }}>Messages</Link>
        <Link to="tasks">Tasks</Link>
      </nav>
      <Routes>

        <Route path="/" element={<Dashboard />} >

          <Route index
            path="messages"
            element={<DashboardMessages />}
          />
          <Route path="/tasks" element={<DashboardTasks />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
