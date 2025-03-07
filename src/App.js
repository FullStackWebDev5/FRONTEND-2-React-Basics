import './App.css';
// import Student from './components/Student'
import ConditionalRendering from './components/ConditionalRendering';

function App() {
  return (
    <div className="App">
      <h1>React Introduction</h1>
      <p>React is a Javascript library for builidng UI</p>
      {/* <div className='students-container'>
        <Student
          studentName='Kiran'
          studentImg='https://reqres.in/img/faces/1-image.jpg'
          ranking={1}
        />
        <Student 
          studentName='Priyanka'
          studentImg='https://reqres.in/img/faces/2-image.jpg'
          ranking={2}
        />
        <Student
          studentName='Prashant'
          studentImg='https://reqres.in/img/faces/5-image.jpg'
          ranking={3}
        />
      </div> */}
      <ConditionalRendering />
    </div>
  );
}

export default App;



/*
  # React Basics
    - Setup using create-react-app package 
      - npx create-react-app my-app
       - Wait for 'Happy Hacking' message, which shows up on successful react app creation
    - Start application
      - cd my-app
      - npm start
        - Load application on localhost:3000

    - Components: 
      - Building block of React code
      - Small blocks of code to build pieces of UI
      - Should return JSX
      - Syntax for using components:
        - <Component1></Component1>
        - <Component1 />
      - Features:
        - Can be nested
        - Can be re-used
      - Naming convention: PascalCase
      - Components are of two types:
        - Class components: Components created using classes (legacy systems, almost deprecated)
        - Functional components: Components created using functions
      
    - JSX
      - JavaScript + XML
      - Difference between JSX and HTML
        - 'className' instead of 'class'
        - Singleton tags need to be used as a paired tag or should end with /
      - Access any variables/expression within JSX using {}
        - Expression value will be empty if any of the following values are passed in {}:
          - Boolean (true/false) 
          - null
          - undefined
        - Comments can be added as JS multiline comment within {}

    - Styling
      - Inline styling
        - Syntax:
          - Way 1
            <h1 style={{ textAlign: 'center' }}>Test</h1>
          - Way 2
            const h1Style = { textAlign: 'center' }
            <h1 style={h1Style}>Test</h1>
      - External styling: CSS External styling

    - Props (Properties)
      - Data passed from the parent component to the child component
      - Using props, we can reuse components with different data
      - Can be related to HTML attributes
      - Syntax:
        - Parent: <Child1 prop1={value1} prop2='value2' ... />
        - Child: 
          function Child1(props) {
            console.log(props.prop1, props.prop2)
          }

*/