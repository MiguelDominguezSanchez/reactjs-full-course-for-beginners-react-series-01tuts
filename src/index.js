import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

/*
We import 
our App from our App component,
because each component gets its own file

Thats the default when we create a react project
*/

const root = ReactDOM.createRoot(
	document.getElementById(
		// App injected into the root element
		'root'
	)
)
root.render(
	<React.StrictMode>
		{/* 
			And here you see that the App Component, is
			injected into a the DOM.
			And its been injected 
			into the element
			that has the id of root
			*/}
		<App />
	</React.StrictMode>
)
