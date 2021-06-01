import React, {useState} from 'react';
import "./Header.css"
import {Apps, Menu, Notifications, Search, VideoCall} from "@material-ui/icons";
import {Avatar} from "@material-ui/core";
import {Link} from "react-router-dom";

const Header = () => {
   const [inputSearch, setInputSearch] = useState("")

   return (
      <div className={"header"}>
         <div className="header__left">
            <Menu/>
            <Link to={"/"}>
               <img className={"header__logo"}
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    alt=""/>
            </Link>
         </div>
         <div className="header__input">
            <input value={inputSearch} type="text" placeholder={"Ara"}
                   onChange={(e) => setInputSearch(e.target.value)}/>
            <Link to={`/search/${inputSearch}`}>
               <Search className={"header__inputButton"}/>
            </Link>
         </div>
         <div className="header__icons">
            <VideoCall className={"header__icon"}/>
            <Apps className={"header__icon"}/>
            <Notifications className={"header__icon"}/>
            <Avatar alt={"emircan"}
                    src={"https://avatars.githubusercontent.com/u/75789956?v=4"}/>
         </div>
      </div>
   )
}

export default Header;
