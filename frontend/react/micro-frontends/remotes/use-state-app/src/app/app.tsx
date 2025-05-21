
import { Route, Routes, Link, Outlet, NavLink } from 'react-router-dom';


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
  return (
    <div>
      {/* Menu */}
      <nav style={{ padding: '1rem', background: '#f8f9fa', marginBottom: '1rem' }}>
        <Link to="/use-state-app" style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link to="/use-state-app/messages" style={{ marginRight: '1rem' }}>Messages</Link>
        <Link to="/use-state-app/tasks">Tasks</Link>
      </nav>
      <Routes>
        <Route  path="/use-state-app" element={<Dashboard />}>
          <Route index
            path="/use-state-app/messages"
            element={<DashboardMessages />}
          />
          <Route path="/use-state-app/tasks" element={<DashboardTasks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
