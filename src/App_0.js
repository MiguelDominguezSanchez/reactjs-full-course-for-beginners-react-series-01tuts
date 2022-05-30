import logo from './logo.svg'
import './App.css'

/*
The App Component, is the default component
created by a new react project 
and wwe also are gonna to explore jsx.
What it is and what you can do with it.
*/

function App() {
	// This could be an arrow function
	/*
	The Component is Function
	Modern React
	uses functional components.

	There was a time 
	that class components were used more often
	and that is not the case now
	I do not plan to go back and cover class components
	in this tutorial series
	but you may see some legacy code class components

	There is also an export statement at the bottom
	that just has the default export for the component created

	We can use this default component
	created by create-react-app
	and just look at the app component

	To learn more about components
	before we create more.

	So lets take a quick look

	We can see it starts out with the 'function' keyword
	this can be an arrow function
	it shouldn't change anything
	and when I create other components out 
	I will probably use arrow functions.

	

	*/
	/*
	Inside any function component
	we can add more javascript
	so I can define a variable up here called 

	const name = "Dave"

	I can refer to this variable later inside the jsx

	The jsx is 'javascript'
	and stands for javascript and XML
	it resemblances html very much
	but it is not quite the same
	you can see we can write html

	*/
	const name = 'Dave'
	return (
		/*
		The return statement returns jsx
		which is all 'javascript'
		*/
		/*
		Now,
		the return statement in the components,
		returns jsx, 
		and wwe will talk about that more in a minute.
		which is all 'javascript'

		But inside, any function component we create
		we can add more javascript
		so I can define a variable up here
		
		*/

		/*

		Here is a div
		Notice some of the attributes are different
		We do not have a 'class' attribute
		that's reserved
		we use className
		also there some others that you may encounter
		like instead of for an htmlFor
		but className is a very common one
		Other than that
		some of the other attributes
		like the source attribute here
		like the src, href, target, rel
		those are just like it will be in html

		And jsx allows us to put javascript expressions
		in the code,
		and thats truly what makes it so powerful

		here in the 'a' tag 
		you can see instead of a normal source value
		we are referring to the logo variable 
		that's pulled in from the lexical scope
		of the this component

		and we have defined the logo up here
		as it is imported
		and it is pulled right into this image tag as the value for source

		and then the image is displayed in the component

		All in all
		you can say JSX provides 
		a template for the component layout

		and also 
		it is important to know that
		JSX renders data as text
		when it displays it

		So if we provide a text string
		or and integer for example
		either type of data
		it will be render just text

		so lets look an example

		*/

		<div className='App'>
			{/* Here is header */}
			<header className='App-header'>
				{/* Here is an image element */}
				{/* Source src attribute */}

				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to see what I change.
				</p>
				<a
					className='App-link'
					// href attribute
					href='https://reactjs.org'
					// target attribute
					target='_blank'
					// the rel attribute
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				{/* <p>html</p> */}
				{/* Here it says html */}
				{/* 
				But that  is simply html
				but if we want an  expression with a value
				we can do something like
				put 'Dave' as a string
				 */}
				{/* <p>{'Dave'}</p> */}
				{/* And now we can get Dave rendered to the page as a string
				We can also change that and put a numeric value integer
				lets say number one
				 */}
				{/* <p>{1}</p> */}
				{/* 
				And now we render as a string as well 
				We can also do that with arrays
				so lets put an array 
				lets say three elements 1, 2, 3
				*/}
				{/* <p>{[1, 2, 3]}</p> */}
				{/* Now if we remove the curly braces
				We say hey itt is a javascript expression
				 */}
				{/* <p>[1,2,3]</p> */}
				{/* 
				Now this is back just html and
				that is what it renders exactly what it is in there
				and we can see the brackets and everything
				But once again curly braces 
				says this iis a javascript expression
				We cannot however display an object
				*/}
				{/* <p>{{ a: 1, b: 2 }}</p> */}
				{/* 
				and we will get an error,
				let me go ahead and show you
				{a:1,b:2}
				we use double curly  braces to say  it is an object 
				but an  error should pop up over here

				Uncaught Error: Objects are not valid as a React child

				So Objects cannot be rendered by the page
				so just remember 
				we can do not with objects
				like we can with arrays

				Also a boolean
				will not render to the page
				So let me go and say this first
				We get rid off the error
				of course we render nothing there
				But if I put an statement like 
				 */}
				{/* <p>{true === false}</p> */}
				{/* that will be false */}
				{/* <p>{2 === 4}</p> */}
				{/* 
				I am going to put the variable name in here 
				that we created above
				*/}
				{/* <p>{name}</p> */}
				{/* 
				and there is the value of the variable 
				so javascript expression works just fine
				*/}
				{/* 
				In VS Code  
				I can comment something out
				Notice how I comment this 
				First the curly braces are used to say hey this is a javascript expression
				and then it uses comments as we would within javascript to comment this out
				if I save it wont show off
				so that it iis an extra step in commenting out some code here in JSX
				that is how VS Code does that
				I believe if I selected around 
				and uncommented
				*/}
				<p>{name}</p>
				{/* 
				And Dave it is back 
				Ok lets remove this and just change 
				some of the template
				But lets create a basic 
				Hello World
				*/}
			</header>
			{/* Inside the paragraph we could just put a word like html */}
			{/* <p>html</p> */}
			{/* Now it will display let me put it inside the header */}
		</div>
	)
}

// The default export statement for the component
export default App
