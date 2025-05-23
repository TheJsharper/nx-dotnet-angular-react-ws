import * as React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

declare global {
  interface Window {
    __POWERED_BY_FEDERATION__?: boolean;
  }
}
const isStandalone = !window.__POWERED_BY_FEDERATION__;

const UseEffectApp = React.lazy(() => import('use_effect_app/Module'));

const UseStateApp = React.lazy(() =>
  import('use_state_app/Module').then(m => ({
    default: isStandalone ? m.App : m.Contact
  }))
);

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

        <Route path="use-effect-app" element={<UseEffectApp />} />


        <Route path="/use-state-app" element={<UseStateApp />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
