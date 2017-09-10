import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// function linkToStylesheet() {
//       var styleSheetLink = document.createElement('link');
//           styleSheetLink.setAttribute('rel', 'stylesheet');
//           styleSheetLink.setAttribute('type', 'text/css');
//           styleSheetLink.setAttribute('href', '/responsive.css');

//       document.head.appendChild(styleSheetLink);
//     }

// linkToStylesheet();



