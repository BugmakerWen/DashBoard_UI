import React from 'react'
import './index.css'

// hook react application to real DOM
import ReactDom from 'react-dom'; 

import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// hook react application to 'root' div.
ReactDom.render(
    <ContextProvider>
        <App />
    </ContextProvider>, 
    document.getElementById('root')); 