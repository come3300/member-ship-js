import styles from '../styles/header.module.css';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

export  function Header() {

    // const [darkMode, setDarkMode] = useState(false);
    return (
  
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">myprofile</h1>
        <ul className="flex items-center">
          {/* <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl"
            />
          </li> */}
        </ul>
        </nav>
    
  
    )
  }

