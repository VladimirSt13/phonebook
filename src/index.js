import { App } from './App';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'src/redux';
import { theme } from './theme';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
