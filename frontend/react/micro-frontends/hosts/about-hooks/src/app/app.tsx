import * as React from 'react';
import { Link, Route, Routes, NavLink } from 'react-router-dom';

const UseEffectApp = React.lazy(() => import('use_effect_app/Module'));

const UseStateApp = React.lazy(() => import('use_state_app/Module'));

export function App() {
  const navStyleClass: ({ isActive }: { isActive: boolean }) => string = ({
    isActive,
  }) => {
    return isActive ? 'nav-link active' : 'nav-link';
  };
  return (
    <React.Suspense
      fallback={
        <>
          {' '}
          <h1>NOOOO</h1>
        </>
      }
    >
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink to="/" className={navStyleClass}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/use-state-app" className={navStyleClass}>
            UseStateApp
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/use-effect-app" className={navStyleClass}>
            UseStateApp
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Hola</h1>} />
        <Route path="/use-effect-app" element={<UseEffectApp />} />
        <Route path="/use-state-app" element={<UseStateApp />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
