// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import UserContextProvider from './Context/UserContextProvider.jsx'

// createRoot(document.getElementById('root')).render(
//   <UserContextProvider>
//     <App />
//   </UserContextProvider>,
// )
// //   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserContextProvider from "./Context/UserContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserContextProvider>
        <App />
    </UserContextProvider>
);
