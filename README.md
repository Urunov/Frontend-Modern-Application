# Modern Application 


## Frontend
 
## 1. Storybook  
   * Storybook is a development environment and playground for UI components
   * Create cmomponents independently
   * Showcase those components interactively in an isolation developlment developed
   * Ability to view the different components that have already been developed
   * View what are the different props that those developed components accept
   * Ability to visually showcase those componenets to your stake holders for feedback
   * Dynamically change props, accessibility score
   * Update version on 2020 August.
   

  1.1 React + Storybook 
  
  ** Commands
   >> Create react app: [npx create-react-app my-app]
   
    >> Storybook v5: [npx -p @storybook/cli sb init] 
    >> Storybook v6: [npx sb init]  
 -----------
 
 # 2. ReactJs
 
   ##  React Fundamentals
   * What is React ?
       >> Open Source library for building user interfaces 
       >> Not a framework
       >> 
       >> Rich ecosystem
       >> 
       >> ES6 - let&const, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructing assignment.
       >> 
       >> npx is npm package runner
       >> 
       >> Document Object Module(DOM)
          
       | MSA  |  SPA | 
       | :---        |    :----:   |   
       | Multi-Page Application | Single-Page Appication|  
       
       
       
       >> Functional Components / Class Components
       
       | Functional Components  | Class Components | 
       | :---        |    :----:   |   
       | Simple Functions  | More feature rich | 
       | Use Func components (as possible)   | Maintain their own private data - state|
       | Absence of 'this' keyword |  Complex UI logic |
       | Solution without using state | Provide lifecycle hooks |
       | Mainly responsible for the UI	| Stateful / Smart / Container|
       | Stateless/ Dumb/ Presentational | |
       
   * JSX 
        >> JavaScript XML (JSX) - Extension to the JavaScript langugage syntax.
        >> 
        >> Write XML-like code for elements and components
        >> 
        >> JSX tags have a tag name, attributes, and children
        >> 
        >> JSX is not a necessity to write React application
        >> 
        >> JSX makes your react code simpler and elegant
        >> 
        >> JSX ultimately transpiles to pure JavaScript which is understood by the browsers. 
        >>    
       
   ## React Practical 
   * [Icons](https://react-icons.github.io/react-icons/icons?name=md)
    >> Command: >> npm install react-icons --save
    >>
    >> YARN >> yarn add react-icons
   * [Toast Notifications](https://github.com/fkhadra/react-toastify)
    >> Yarn >> yarn add react-tostify
   * [React Modal](https://github.com/reactjs/react-modal)
    >> Yarn >> yarn add react-modal
    >> 
    >> Style-ReactModal>> [link](https://reactcommunity.org/react-modal/)
   * Tooltip
    >> YARN>> yarn add '@tippy.js/react'
   * [Credit-Card](https://github.com/amarofashion/react-credit-cards)  
   ![Screen Shot 2021-04-29 at 6 21 12 PM](https://user-images.githubusercontent.com/11626327/116529255-b622ad80-a917-11eb-9c5e-769302b0b406.png)

   >> YARN >> yarn add react-credit-cards
   * [MDX-DESC-Presentation](https://github.com/jxnblk/mdx-deck)
   >> 
   >> YARN>> yarn add -D mdx-deck
   * [React-Player](https://github.com/cookpete/react-player)
   >> YARN >> yarn add react-player
   * [Loading](https://github.com/davidhu2000/react-spinners)
     >> YARN >> yarn add react-spinners
     * [Chart](https://github.com/reactchartjs/react-chartjs-2)
     >> YARN >> yarn add react-chartjs-2 chart.js
     >> 
     >> rcc  (Auto generation of code react in IntelliJ)
     >> rce (Auto generation of code react in VSC)

   * React Advanced Topics
   >> List and Key
      >> Keys give the elements a stable identity
     >> Keys help React identity which items have changed, are added, or are removed.
     >> Help in efficient update of the user interface.
  
## React Lifecycle
  * (1) Mounting - When an instance of a component is being created and inserted into the DOM
      >> constructor, static getDerivedStateFromProps, render and componentDidMount
  * (2) Updating - When a component is being re-rendered a result qof changes to either its props or state
      >> static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate 
  * (3) Unmounting - When a component is being remove from the DOM 
      >> component Will Unmount
  * (4) Error Handling - When there is an error during rendering, in a lifecycle method, or in the constructor of any child component
      >> static getDrivedStateFromError and componentDidCatch
   
  ### (2) Updating Lifecycle Methods: 
  * static getDerivedStateFromProps(props, state)
     >> Method is called every time a component is re-rendered 
     >> Set the state
     >> Do not cause side effects. EX: HTTP requests.
     >> 
 
  * shouldComponentUpdate(nextProps, nextState)
     >> Dictates if the component should re-render or not 
     >> Performance optimization
     >> Do not cause side effects. Ex.HTTP requests. Calling the setState method
     >> 
  *  render()
     >> Do not change state or interact with DOM or make ajax calls.
     >> Only required method
     >> Read props & state and return JSX
     >> 
  * getSnapshotBeforeUpdate(prevProps, prevState)
     >> Called right before the changes from the virtual DOM are to be reflected in the DOM.
     >> Cature some information from the DOM
     >> Method will either return null or return a value. Returned value will be passed as the third parameter to the next method.
     >> 
  
  * componentDidUpdate(prevProps, prevState, snapshot)
     >> Called after the render is finished in the re-render cycles
     >> Cause side effects
    
  ## (3)componentWillUnmount()

   * Method is invoked immediately before a components is unmounted and destoryed.
   * Cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers.
   * Do not call the setState method
 
  ## (4)ERROR handling Phase Methods

   * static getDerivedStateFromError(error)
   * componentDidCatch(error, info)
-----
  * Error Boundary
  
  
 -----------
 ## Higher Order Components (HOC) 
  * A pattern where a function takes a component as an argument and returns a new component.
   >> const NewComponent = higherOrderComponent(orginalComponent)
   >> const EnhancedComponent = higherOrderComponent(orginalComponent)
------
## Render props
  >> The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.
  >> 
------
## React: HTTP GET Request
  >> jsonplaceholder.typicode.com
  >> 
# 3. Typescript
What is Typescript and why do we use it ?
 >> node install -g
 >> npm install -g typescript [yarn add typescript] 
 >> version check: rsc --v
 >> 
 
 # String Format
      String.Format():
      var id = image.GetId()
      String.Format("image_{0}.jpg", id)
      output: "image_2db5da20-1c5d-4f1a-8fd4-b41e34c8c5b5.jpg";
      Specifier available!

      var value = String.Format("{0:L}", "APPLE"); //output "apple"

      value = String.Format("{0:U}", "apple"); // output "APPLE"

      value = String.Format("{0:d}", "2017-01-23 00:00"); //output "23.01.2017"


      value = String.Format("{0:s}", "21.03.2017 22:15:01") //output "2017-03-21T22:15:01"

      value = String.Format("{0:n}", 1000000);
      //output "1.000.000"

      value = String.Format("{0:00}", 1);
      //output "01"

----
## TypeScript Static Methods and Properties [...](https://www.typescripttutorial.net/typescript-tutorial/typescript-static-methods-and-properties/)

Static methods
Similar to the static property, a static method is also shared across instances of the class. To declare a static method, you use the static keyword before the method name. For example:


        class Employee {
            private static headcount: number = 0;
            constructor(
                private firstName: string,
                private lastName: string,
                private jobTitle: string) {

                Employee.headcount++;
            }

            public static getHeadcount() {
                return Employee.headcount;
            }
        }


## When to use static methods in TypeScript?


 ## 4. MobX
 ## 5. Material-UI
 
 
 
 Project:  Business Card: 
   >> [Business Card Resource](https://stackblitz.com/edit/business-card-react) >> 
   >> [Business Card Resource2](https://codesandbox.io/s/fpm15?file=/src/index.js:7237-7245)
   >> [Business Card Resource3](https://npm.io/package/react-business-card)
   >> [Business Caed Resource4](https://libraries.io/npm/react-business-card)
   >> [Business CR5](https://askavy.com/react-card/)
 
 
 




Reference
1. [React + Storybook](https://www.youtube.com/watch?v=eJd08j18EH8&list=PLC3y8-rFHvwhC-j3x3t9la8-GQJGViDQk&index=3)
2. [Practical React](https://www.youtube.com/watch?v=4l0nsK4ezNc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=2)
