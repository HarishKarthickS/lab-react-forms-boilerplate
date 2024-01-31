import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
     <>
        <div>
            <button><Link to="/forms" >Registration</Link></button>
            <button><Link to="/contacts">Harish</Link></button>
        </div>
     </>   
    )
}

export default Navbar;