- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components let you take advantage of React methods that utilize the component lifecycle. This gives us greater control over how components in React work. 

- [ ] Name three lifecycle methods and their purposes.

componentDidMount will execute code when the render method is invoked, render is a vital method that actually indicates to React to return some piece of DOM, and componentDidUpdate, which updates the DOM in response to prop or state changes of a componenet.

- [ ] What is the purpose of a custom hook?

Custom hooks allow us to combine several hooks into a single custom one, which in the long term can be simpler and more modular. It also allows us to combine the stateful logic of several hooks into a single custom one with advanced stateful logic. 

- [ ] Why is it important to test our apps?

Testing is important to ensure our apps are working correctly and returning the data we expect. It also helps developers in the future that weren't involved in authoring the code but are potentially being asked to maintain. By using tests, they can quickly figure out if everything is working correctly and perhaps understand what the code is doing better. 
