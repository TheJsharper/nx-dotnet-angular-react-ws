import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const UseStateApp = React.lazy(() => import('use_state_app/Module'));

export function App() {
  return (
    <React.Suspense fallback={<> <h1>NOOOO</h1></>}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/use-state-app">UseStateApp</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="about-hooks" />} />
        <Route path="/use-state-app" element={ <UseStateApp/>} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
