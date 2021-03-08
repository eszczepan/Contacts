import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';

import * as serviceWorkerRegistration from 'core/service-worker/serviceWorkerRegistration';
import reportWebVitals from 'core/reportWebVitals';
import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();
