import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import RestrauntMenu from "./components/RestaurantMenu";
// import Profile from "./components/Profile";
import Profile from "./components/ProfileClass";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
//Lazy Load or Chunking or Dynamic Import
const Instamart = lazy(() => import("./components/Instamart"));
// upon on demand loading -> upon render -> react suspends loading
// we use suspense to show fallback component until the component is loaded

//default Export
// import Header from "./components/Header"
//Named Import
// import { Title } from "./components/Header";

/*
      Header
        |-> Logo(TITLE)
        |-> Nav Items(Right Side)
        |-> Cart

      Body
        |-> Search Bar   
        |-> Restraunt List
        |-> Restraunt Cards
                |-> Image
                |-> Name
                |-> Rating
                |-> Cusines

      Footer 
        |-> Links
        |-> Links

*/

// Chunking -> Code Splitting -> Lazy Loading -> Dynamic Import
// What is Chunking? -> Divide the code into small chunks and load only when required
// Why Chunking? -> To improve the performance of the application
// How Chunking? -> Dynamic Import
// What is dynamic import? -> import the module when required

// never create component inside component
// never create useState inside if else or for loop or outside functional component
const AppLayout = () => {
  const [user, setUser] = React.useState({
    // name: "Md Amanullah",
    // email: "aman999.au@gmail.com",
  });

  return (
    // <React.Fragment>
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
    // </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body user={{ name: "Food Panda", email: "mail@foodpanda.com" }} />
        ),
      },
      {
        path: "/about",
        element: <AboutUs />,
        children: [
          {
            path: "profile", // parentpath/{path} => localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/* 
Props Drilling -> passing props from parent to child to child to child

App Layout
  (state=user)
    - <Body user={user}/>
      - <RestaurantCard user={user}/>
        - <h4>{user.name}</h4>

*/
