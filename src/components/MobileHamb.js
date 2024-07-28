import Menu from '../assets/img/menu.png'
import Close from '../assets/img/close.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="bg-green-300 md:hidden lg:hidden w-80 flex justify-center">
        <ul className="flex m-2 p-1 items-center justify-center flex-col ">
            <li className="m-2  ">
                <Link to="/">Home</Link>
            </li>
            <li className="m-2 ">
                <Link to="/about">About Us</Link>
            </li>
            <li className="m-2 ">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="m-2 ">
                <Link to="/cart">Cart</Link>
            </li>
            <li className="m-2 ">
                <Link to="/instamart">Instamart</Link>
            </li>
            <li className="m-3 hover:text-white">
                {isLoggedIn ? (
                <button
                    className="logout-btn"
                    onClick={() => setIsLoggedIn(false)}
                >
                    Logout
                </button>
                ) : (
                <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
                    Login
                </button>
                )}
            </li>
        </ul>
    </div>
    )
}

const MobileHamb = () =>{
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        console.log(showMenu)
        setShowMenu(!showMenu);
    }
    return (
        <div className="mt-2 flex justify-end md:hidden lg:hidden  " >
            {
                showMenu &&  <NavLinks/>
            }
            <button className="mr-2 inline-flex justify-end " onClick={toggleMenu} >
                <img className="h-8" src={showMenu?Close:Menu}>
                </img>
            </button>
        </div>
        

        
    )
}

export default MobileHamb