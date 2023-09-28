import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './store';

import App from './App';

store.subscribe(() => console.log(log.getState()));
const rootElement = document.getElementById('root');
const root = createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter>
);
