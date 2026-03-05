import React, { useState } from 'react'
import {IconButton} from "@mui/material"
import { Search,Person,Menu } from "@mui/icons-material"
import { Link } from 'react-router-dom'
import variable from "../styles/variables.scss"
import {useSelector,useDispatch} from "react-redux"
import {setLogout} from "../redux/state"


import "../styles/Navbar.scss"
const Navbar = () => {
    const [dropdownMenu,setDropdownMenu] = useState(false);
    const user = useSelector((state)=>state.user)

    const dispatch= useDispatch()
  return (
    <div className='navbar'>
        <Link to="/">
        <img src='/assets/logo.jpg' alt='logo'/>
        </Link>
        <div className='navbar_search'>
            <input type='test'placeholder='Search....'/>
            <IconButton>
            <Search  sx={{ color :variable.pinkred}}/>
            </IconButton>
        </div>
        <div className='navbar_right'>
            {user ? (<Link to="/create-listing" className='host'>Become A host</Link>): (<Link to="/login" className='host'>Become A host</Link>)}

    <button className='navbar_right_account' onClick={() =>setDropdownMenu(!dropdownMenu)}>
    <Menu sx={{ color :variable.darkgrey }}/>
    {!user ?
    <Person sx={{ color :variable.darkgrey }}/>
    :(
        <img src={`http://localhost:3001/${user.profileImagePath.replace("public","")}`} alt='profile photo' style={{ objectfit: "cover", borderRadius:"50%"}}/>
    )
     }
    </button>
{dropdownMenu && !user && (
<div className='navbar_right_accountmenu'> 
    <Link  to='/login'>Log In </Link>
    <Link  to='/register'>Sign Up</Link>

</div>
)}
{dropdownMenu && user && (
    <div className='navbar_right_accountmenu'>
        <Link to =''>Trip List</Link>
        <Link to =''>Wish List</Link>
        <Link to =''>PropertyList</Link>
        <Link to =''>Reservation List</Link>
        <Link to =''>Become A Host</Link>
        <Link to='/Login' onClick={() =>{
            dispatch(setLogout())
        }}>Log Out</Link>
    </div>
)}

        </div>
    </div>
  )
}

export default Navbar
