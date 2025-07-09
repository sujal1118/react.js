import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
 
function MyApp(){
    return (
        <div>
            <h1> custom app | vite</h1>
        </div>
    )
}


// const ReactElement = {
//     type : 'a', 
//     props :
//     {
//         href: 'https://google.com',
//         target : '_blank',
//     },
//         children: "click me to visit google"
    
// };

// const anotherElement = (
//     <a href="https://google.com" target="_blank">
//         click me to visit google
//     </a>
// );
const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click visit google'
);

const container = document.getElementById('root');
ReactDOM.createRoot(container).render(ReactElement); // ✅ this works if ReactDOM is globally defined


