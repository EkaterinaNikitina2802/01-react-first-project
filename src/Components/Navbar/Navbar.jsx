import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

console.log(s);

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile" style={({isActive})=> ({color: isActive? 'black' : 'white'})}>Profile</NavLink> 
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" style={({isActive})=> ({color: isActive? 'black' : 'white'})}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
