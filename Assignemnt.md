Laying App

Config Driven UI:
 The data is being controlled by backend according to data the UI is rendered for eg if the data doesn't not have any carousel then there won't be any.


Assignment

JSX Mandatory:
JSX is not mandatory but it makes developer’s life easier by providing us HTML or XML plus js like structure else we have to write using ReactElement which is an object at the end of the day and complex as well so JSX is an easy way to write code.

Is ES6 Mandatory:
ES6 is not mandatory for react but it is highly  recommended as it increases optimization of an Application

How can we write comment in jsx:
{/* This is a JSX comment */}

<React.fragment> vs <></>
Basically when we use React.Fragment we don't have to wrap the elements in a parent element <></> it is a shorthand for React.fragment the only key difference is that we cannot use keys and different attributes in <></>
For eg:
<></>
<React.Fragment key={id}></React.Fragment>

What is Virtual Dom:
The Document Object Model (DOM) represents the structure of a web page as a tree of objects, where each object corresponds to an element on the page. The Real DOM is the actual browser representation of the page's structure. The Virtual DOM, on the other hand, is a lightweight, in-memory representation of the Real DOM maintained by frameworks like React.

Reconciliation in React:
Reconciliation is the process of comparing the previous state of the Virtual DOM with the updated state to determine the differences. It involves identifying which parts of the Virtual DOM need to be updated to reflect the changes in the application's state. This process is crucial for optimizing performance, as updating the entire Real DOM can be computationally expensive.

React Fiber:
React Fiber is an internal reconciliation algorithm that helps in updating and re rendering of components in an efficient way. In order for the UI not to freeze, React fiber divides the process into small rendering processes called fibers which allow pause, abort or prioritize certain updates that are needed.

Why we need Keys in React:
Keys are the crucial reason for optimization of an application. In DOM each element should have a unique identifier which helps to keep a track when re rendering is performed else the all the elements gets re rendered which compromise the optimization of an app.

Index as Keys in React:
Indexes can be used in react when there is no unique identifier available actually index also compromise optimization in react app but is better than not providing any key. Actually the indexes changes when re rendering is performed and re ordering happens and all these elements gets re rendered resulting into rerendering of more than an element which is bad practice as it compromise optimization.

Props in React:
Props are the short hands for properties it is way to share data from one compoennt to another as an argument and the component receives it like a parameter. It is immutable data.

Config Driven UI:
 The data is being controlled by backend according to data the UI is rendered for eg if the data doesn't not have any carousel then there won't be any.






