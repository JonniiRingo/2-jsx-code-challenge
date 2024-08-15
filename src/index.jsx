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
    return (
    <div>
        <h1>Setting Up a Project for Development</h1>
        <ul>
            <li>Navigate into the folder that you are going to be working in through the terminal: 
                <br /> 
                <code>cd "project folder"</code>
            </li>

            <li>Now install the required node packages 
            <br />
            <code>npm i</code>
            </li>

            <li>Create a .gitignore and then copy the standard things to ignore from https://github.com/github/gitignore/blob/main/Node.gitignore: 
                <br /> 
                <code>touch .gitignore</code>
            </li>
            
            <li>Initialize git: 
                <br /> 
                <code>git init</code>
            </li>

            <li>Add all files to working tree: 
                <br /> 
                <code>git add .</code>
            </li>

            <li>Submit your initial commit: 
                <br /> 
                <code>git commit -m "initial commit"</code>
            </li>

            <li> Run the react project
                <br />
                <code>npm run dev</code>
            </li>

        </ul>
    </div>
    ); 
}

// Rendering the app
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  