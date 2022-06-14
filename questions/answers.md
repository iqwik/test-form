● How do relative, fixed, absolute, and statically positions differ?

	Static:
		This is the default for every single page element. Static doesn’t mean much;
		it just means that the element will flow into the page as it normally would

	Relative:
		There are three other things that happen when you set position: relative;
			- allows move element by top, left, bottom or right
			- introduces the ability to use z-index on that element, which doesn’t work with statically positioned elements.
				Even if you don’t set a z-index value, this element will now appear on top of any other statically positioned element.
			- limits the scope of absolutely positioned child elements.
				Any element that is a child of the relatively positioned element can be absolutely positioned within that block

	Absolute:
		Uses the positioning attributes top, left, bottom, and right to set the location.
		These values will be relative to the next parent element with relative (or absolute) positioning.
		If there is no such parent, it will default up to the <html> element itself
		
	Fixed:
		A fixed position element is positioned relative to the viewport, or the browser window itself.
		Fixed positioned element will stay right where it is when the page is scrolled.
		
	Sticky:
		A sticky element will just sit there like a static element, but as you scroll past it,
		if it’s parent element has room (usually: extra height) the sticky element will behave as
		if it’s fixed until that parent element is out of room.


● What is the difference between variables created using let, var, and const?

	Use const as your first option, and use let only when you know you'll have to reassign the variable at some point.
	And don't use var at all.
	
	Const:
		The idea is that using const prevents you from reassigning variables by mistake.
		If you accidentally change the value of a variable that shouldn't be changed, you'll get the error immediately and you can fix it.
		However, if you use let or var, it would fail silently.
	
	Var:
		Variables created with the var keyword are "function-scoped".
		It means that if you declare that variable inside a function, it will be available within that function.
		And if you declare a variable outside a function, it will be a global variable
		Also, a variable created with var can be redeclared.
		
	Let:
		If you declare a variable using let, you can reassign that variable using the = operator.
		And variable will be available inside the scope.
	
● What must be developed first, desktop or mobile view, and why?
	
	Desktop, however if you're incrementing only mobile version - cause mobile =)
	Desktop - Cause when you will use media queries - CSS rules will redeclared for any elements. It will be pretty easy.
	
● What is the difference between an alert and an alert dialog? Also, walk us through the appropriate instances to use them.

	An alert is a function which call dialog with any text and has 1 button "ok". It is triggered with the function alert("any text")
	Alert Dialog - custom and flexible view of dialog (?) or custom function which will call the function alert... 
	
	example:
	```
		<script type="text/javascript">
			const alertDialog = () => { alert("OK"); }
		</script>
		
		<button onclick="alertDialog()">Click me!</button>
	```
● What is the difference between a link, a generic button and a submit button? Walk us through the appropriate instances to use them.

	A button with type "button" won't submit a form data but with type="submit" will.
	type="button":
		The button has no default behavior, will not submit a form.
		
	type="submit":
		The button submits the form data to the server
		
	link:
		Use hyperlinks to jump from one document to another. For changing route.
		A link will redirect you to a new page or a section within the same page.


	```
		<button type="button" onClick="customBehavior()">Click!</button>
		
		<form>
			// ...any inputs
			
			<button type="submit">Send</button>
		</form>
		
		<a href="/other-page">Other page</a>
	```
● React (how the component cycle works, if you have experience with Redux
Reducers/Actions, Webpack, code efficiency, optimization, and performance).

There are 3 general life cycle methods:
	>_ 1. Mounting - componentDidMount()
		is invoked immediately after a component is mounted (inserted into the tree).
		
	>_ 2. Updating - componentDidUpdate(prevProps, prevState, snapshot)
		is invoked immediately after updating occurs. This method is not called for the initial render.
		 
		
	>_ 3. Unmounting - componentWillUnmount()
		is invoked immediately before a component is unmounted and destroyed.
 
	=> in cases if uses PureComponent: shouldComponentUpdate(nextProps, nextState)
		is invoked before rendering when new props or state are being received.
		Defaults to true. This method is not called for the initial render or when forceUpdate() is used.
		This method only exists as a performance optimization.
	
	=> static getDerivedStateFromProps(props, state)
		 is invoked right before calling the render method, both on the initial mount and on subsequent updates.
		 It should return an object to update the state, or null to update nothing.
	
	
	=> getSnapshotBeforeUpdate(prevProps, prevState)
		 is invoked right before the most recently rendered output is committed to e.g. the DOM.
		 It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.
		 Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().
 
	=> static getDerivedStateFromError(error)
		This lifecycle is invoked after an error has been thrown by a descendant component.
		It receives the error that was thrown as a parameter and should return a value to update state.
		getDerivedStateFromError() is called during the “render” phase, so side-effects are not permitted.
		For those use cases, use componentDidCatch() instead.
		
	=> componentDidCatch(error, info)
		This lifecycle is invoked after an error has been thrown by a descendant component.
		It receives two parameters:
			error - The error that was thrown,
			info - An object with a componentStack key containing information about which component threw the error.
		It should be used for things like logging errors.
		
But I use hooks:

	useState - keeps state
	useEffect - implemented behavior of componentDidMount && componentDidUpdate
	useLayoutEffect - looks like to useEffect, but uses in special cases when need update DOM immediately after render without any light shots
	useMemo - memoization for any arrays
	useCallback - memoization for any functions
	
Yes, I have experience with:
	- Redux (Reducers, actions, selectors)
	- Webpack
	and etc...
	
=)
	