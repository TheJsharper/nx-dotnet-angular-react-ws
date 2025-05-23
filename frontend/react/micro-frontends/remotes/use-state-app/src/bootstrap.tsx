import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//import App from './app/app';
import  {App, Contact} from './app/app';

declare global {
  interface Window {
    __POWERED_BY_FEDERATION__?: boolean;
  }
}

const isStandalone = !window.__POWERED_BY_FEDERATION__;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    {isStandalone ? (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ) : (
      <Contact />
    )}
  </StrictMode>,
);

