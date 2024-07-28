import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class AboutUs extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent-Constructor")
  }

  componentDidMount() {
    // Best place to make API Call
    // console.log("Parent- componentDidMount")
  }

  render() {
    // console.log("parent-render")
    return (
      <div>
        <h1>About Us</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <>
              <h1 className="text-2xl font-bold">Aryan</h1>
              <h1 className="text-2xl font-bold">aryanchoubey08@gmail.com</h1>
            </>
          )}
        </UserContext.Consumer>
        {/* <p>This is Namaste React Live Course Chapter 9: Finding the Path </p> */}
        <ProfileFunctionalComponent name={""} />
        {/* <ProfileClass name={"First Child"} xyz={"xyz"} /> */}
      </div>
    );
  }
}

/* 
Parent-Constructor
Parent-render
   Child- Constructor 
   Child- Render

   DOM is updated
   json is logged in console
   Child componentDidMount

Parent - componentDidMount
*/

export default AboutUs;
