import React from "react";
import ReactDOM from "react-dom/client";

// React CreateElement method
// This is React Element
/* const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "This is Title"
);
 */

//JSX Method
// This is React Element
const heading1 = (
  <h1 key="h2" className="heading">
    This is JSX
  </h1>
);

const Heading2 = () => (
  <h1 key="h2" className="">
    Hello JSX
  </h1>
);

// JSX => React.createElement => object  => HTML(DOM)

// React Component
/*
    1. Functional Components(New Metod) 
    2. Class Based Component (OLD Way)
*/

// 1. Functional Components
/*  -> Name of Component Starts with Capital Letter(Not Mandatory)
    -> Functional Component is Normal Function
    ->
 */

/* const HeaderComponent1 = () => {
  return (
    <div>
      <h1>Hello Functional Component</h1>
      <h2>This is H2 Tag</h2>
    </div>
  );
}; */

// We can remove return keyword and it wprks the same
//This is React Component
// Composing Component -> passing component as a porps to other component

const HeaderComponent = () => (
  <div>
    {/*When It is React Component -> <ComponentName /> OR ComponentName()*/}
    <Heading2 />
    {/* When It is React Element we use -> {}  */}
    {heading1}
    <h1>Hello Functional Component</h1>
    <h2>This is H2 Tag</h2>
  </div>
);

// React.Fragement
// JSX can only have one parent

/* 

const jsx = (
  <>
    <h1>JSX</h1>
    <h1>2nd JSX</h1>
  </>
);

const styleObj = {
  backgroundColor: "tomato",
  border: "1px solid yellow",
  margin: "4px 10px",
  padding: "10px",
};
// In-Line Style in JSX
const jsx = (
  // <div style={styleObj}>
  <div
    style={
      ({
        backgroundColor: "yellow",
      },
      styleObj)
    }
  >
    <h1>JSX</h1>
    <h1>2nd JSX</h1>
  </div>
);

*/

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(<HeaderComponent />);
