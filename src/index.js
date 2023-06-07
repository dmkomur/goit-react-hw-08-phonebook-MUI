import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { store} from 'Redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey, deepOrange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[600],
    },
    secondary: {
      main: deepOrange[400],
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        
        <App />

      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
