// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import { WithoutQuery } from './components/without-query/without-query.component';
import { WithQuery } from './components/with-query/with-query.component';

export function App() {
  return (
    <div>

      
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">WITHOUT QUERY</Link>
          </li>
          <li>
            <Link to="/with-query">WITH QUERY</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
           <WithoutQuery />
          }
        />
        <Route
          path="/with-query"
          element={
            <WithQuery />
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
