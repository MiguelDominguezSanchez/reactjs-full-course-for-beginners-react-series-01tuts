import logo from './logo.svg'
import './App.css'

function App() {
	// const name = 'Dave'

	/* 

				So we can put an expressions like that 
				*/

	/* <p>Hello {name}</p> */

	/* 
				Lets take a step further   
				and say we  wanna to load a random name

				So instead of defining a variable up here

				Lets define a function
				and let's call this function 

				handleNameChange = () => {}

				and you often find that functions are started with 'handle' as a convention or something similar to that

				however in the page we will be handling a click event or some other type of event 
				here our name is handleNameChange
				so we can use to start functions 
				with the word handle as the conventions

				const handleNameChange = () => {
					// and we define names inside
					// const names = []
					// and instead of just Dave
					// I am gonna have 'Bob', 'Kevin', 'Dave'
					const names = ['Bob', 'Kevin', 'Dave']
					// and after we define our names array 
					// lets define a random integer
					// a variable equal to Math.floor()
					// const int = Math.floor()
					// and we just want this to be from zero to two
					// so we use Math.random()
					// const int = Math.floor(Math.random())
					// and it will take it times three

					const int = Math.floor(Math.random() * 3)

					// if you want it to be between 1 and 3 
					// of course this isn't my basic javascript course
					// we would have to add 1 to this
					// So right now we have between 0 and 2 a random number
					// and then we go ahead and return
					// names and the element from names
					// that put a random number

					return names[int]

					// Now instead of putting a name in here
					//
				
				}
				*/

	const handleNameChange = () => {
		const names = ['Bob', 'Kevin', 'Dave']
		const int = Math.floor(Math.random() * 3)
		return names[int]
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />

				<p>
					Hello
					{handleNameChange()}
					{/* 
					and we get Hello Kevin,
					and if we reload we have Hello Dave,
					let's try again Hello Kevin,
					Maybe we get Bob sometime
					Still getting Hello Kevin right now,
					Here is Bob,...
					one of three chances
					33% 
					but the point being is you can call a function in here 
					and it iis also a javascript expression that were inserting 
					into the JSX

					 */}
				</p>
			</header>
		</div>
	)
}

export default App
