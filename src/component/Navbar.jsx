import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    const [userImage, setUserImage] = useState("");
    const [searchKey, setSearchKey] = useState("");

    const showProfileLoginHandle =()=> {
        const name = prompt("What is your name");
        const username = prompt("Enter Username - ie email@domain.com:");
        const password = prompt("Enter password:");
        
        if (name && username && password) {
            alert(`Welcome, ${name}!`);
            if (name === "Steven") {
                setUserImage("male");
            } else if (name === "Mary") {
                setUserImage("female");
            }
            props.setName(name); // Update the user's name in the HTML
        } else {
            alert("Invalid input or Invaid account.");
        }
    }

    const search = () => {
        alert(`Performing search for: ${searchKey}`);
    }

  return (
    <nav className="flex px-4 py-2 md:shadow-lg items-center relative w-100">
        <div className="text-lg font-bold md:py-0 py-4 small-hidden">
            FutureSports
        </div>
        <div style={{width: "100%"}}>
            <div className="flex small-gap-0 small-height-50" style={{height: "100px", width: "100%", gap:"5%", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <div className="flex" style={{alignItems: "center"}}>
                    <NavLink to={"/"}>
                        <img src="images/header-home.jpg" alt="HOME" />
                    </NavLink>
                    <NavLink to={"/play"}>
                        <img src="images/header-play.jpg" alt="Plan Tennis" />
                    </NavLink>
                    <NavLink to={"/contact"}>
                        <img src="images/header-contact.jpg" alt="Contact" />
                    </NavLink>
                    {
                        userImage ?
                        <img src={`images/${userImage}.png`} alt="Profile" style={{height: "80px", borderRadius: "50%"}} /> :
                        <NavLink onClick={showProfileLoginHandle}>
                            <img src="images/header-profile.jpg" alt="Profile" />
                        </NavLink>
                    }
                </div>
                <div className="flex">
                    <a href="http://www.facebook.com/" className="flex md:inline-f1lex items-center h-100">
                        <img src="images/header-facebook.jpg" alt="Facebook" />
                    </a>
                    <a href="http://www.instagram.com/" className="flex md:inline-flex items-center h-100">
                        <img src="images/header-instagram.jpg" alt="Instagram" />
                    </a>
                    <a href="http://www.youTube.com/" className="flex md:inline-flex items-center h-100">
                        <img src="images/header-youtube.jpg" alt="youTube" />
                    </a>
                </div>
                <div className="flex" style={{justifyContent: "center", alignItems: "center"}}>
                    <input type="email" placeholder="Search" value={searchKey} onChange={(e)=>{setSearchKey(e.currentTarget.value)}} className="small-input block px-1 py-1.5 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    <button className="px-2 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 small-button" onClick={search}>
                        search
                    </button>
                    <a href="https://openweathermap.org/city/2147714" className="flex md:inline-f1lex items-center h-100">
                        <img src="images/header-weather.jpg" alt="Weather" />
                    </a>
                </div>
            </div>
            <div className="flex" style={{justifyContent: "center"}}>
                <div className="flex small-gap-0 small-font-10" style={{width: "100%", justifyContent: "center", gap: "5%", background: "#5AC04A"}}>
                    <NavLink to={"/competitions"} className="flex md:inline-flex p-4 items-center bg-gray hover:bg-gray-50 border-solid-fw-bold small-button small-border">
                        <span>COMPETITIONS</span>
                    </NavLink>
                    <NavLink to={"/resultsstats"} className="flex md:inline-flex p-4 items-center bg-gray hover:bg-gray-50 border-solid-fw-bold small-button small-border">
                        <span>RESULTS & STATS</span>
                    </NavLink>
                    <NavLink to={"/generalinfo"} className="flex md:inline-flex p-4 items-center bg-gray hover:bg-gray-50 border-solid-fw-bold small-button small-border">
                        <span>GENERAL INFO</span>
                    </NavLink>
                    <NavLink to={"/calendar"} className="flex md:inline-flex p-4 items-center bg-gray hover:bg-gray-50 border-solid-fw-bold small-button small-border">
                        <span>CALENDAR</span>
                    </NavLink>
                    <NavLink to={"#"} className="flex md:inline-flex p-4 items-center bg-gray hover:bg-gray-50 border-solid-fw-bold small-button small-border">
                        <span>BOOKINGS</span>
                    </NavLink>
                    <NavLink to={"#"} className="flex md:inline-flex p-4 items-center bg-gray hover:bg-gray-50 border-solid-fw-bold small-button small-border">
                        <span>CONNECT</span>
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar