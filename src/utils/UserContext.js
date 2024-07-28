// What is Context
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// --> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
// useContext is used to consume the context value  that is passed from the parent component.

import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Aryan",
    email: "aryanchoubey08@gmail.com",
  },
});
export default UserContext;
