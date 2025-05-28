// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <NxWelcome title="use_effect_app" />

   
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="page-1">Home</Link>
          </li>
          <li>
            <Link to="page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route index
          path="/"
          element={
            <>
             <h1> Home This is the generated root route.{'!! '} </h1>
              <Link to="../page-2">Click here for page 2.</Link>
              <Link to="../page-1">Click here for page 1.</Link>
            </>
          }
          />
        <Route
          path="page-1"
          element={
            <>
            <h1> Page 1 This is the generated root route.{'! '} </h1>
              <Link to="../">Click here to go back to root page.</Link>
            </>
          }
        />
        <Route
          path="page-2"
          element={
            <>
            <h1> Page 2 This is the generated root route.{'! '} </h1>
              <Link to="../">Click here to go back to root page.</Link>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
