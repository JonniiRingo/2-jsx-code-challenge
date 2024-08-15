//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from 'react'; 
import ReactDOM from 'react-dom/client';


// Defiing the app
function App(){
    <div>
        <h1>Setting Up a Project for Development</h1>
        <ul>
            <p>You want to navigate into the folder that you are going to be workig in through the terminal</p>
            <li> cd "project folder" </li>
            <p>You want to create a .gitignore and then copy the standard things to ignore from github/node page. </p>
            <li>touch .gitignore</li>
            <p>Now you want to initialize git</p>
            <li>git init</li>
            <p>add all files to working tree</p>
            <li>git add .</li>
            <p>submit your initial commit</p>
            <li>git commit -m "initial commit"</li>
        </ul>
    </div>
}

// Rendering the app
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  