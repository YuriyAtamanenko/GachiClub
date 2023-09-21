import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './Redux/store';
import { store, persistor } from './Redux/store';
// import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/GachiClub">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter basename="/GachiClub">
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
// );
