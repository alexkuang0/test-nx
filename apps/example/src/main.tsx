import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { TanstackRouterProvider } from './lib/providers/router';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <TanstackRouterProvider />
  </StrictMode>
);
