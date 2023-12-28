import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: "#F4CE14",
    },
    secondary: {
      main: "#495E57",
    },
  },
  typography: {
    h1: {
      fontFamily: "Markazi Text, serif",
      fontSize: "40px",
      fontWeight: "500",
    },
    h2:{
      fontFamily: "Karla",
      fontSize: "20px",
      fontWeight:"800",
    },
  },
  h3:{
    fontFamily: "Karla",
    fontSize: "16px",
    fontWeight:"500",
  },
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);



reportWebVitals();
