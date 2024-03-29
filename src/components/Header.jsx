import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Music_Context } from '../context'
import { useContext } from 'react'

const Header = () => {

   const {sideBar,setSideBar} = useContext(Music_Context);
   const [search,setSearch] = useState(false)

   function toggleSide(){
    setSideBar(prev => !prev)
    console.log(sideBar)
   }

   function searchVis(){

setSearch(prev=>!prev)
   }

   const closeSearch = (e) =>{
    e.preventDefault();
    setSearch(false)
   }
  return (
    <header className='header'>
        <div className='header_content'>
<div className='header_nav'>
    <Link>Profile</Link>
    <Link>About</Link>
    <Link>Contact</Link>
</div>
<form className={`header_search ${search?'header_search-active':null}`}>
<input type="text" placeholder="Artist, track or podcast"/>
<button className='btn-pos' type='button'><i className='fa-solid fa-magnifying-glass'></i></button>
<button onClick={closeSearch}  className='close'><i className='fa-solid fa-xmark'/></button>
</form>
<div className='header_actions'>

    <div className='header_action  action_search'>
<button onClick={searchVis} className='header_action-btn'> <i style={{color:"lightgray"}} className="fa-solid fa-magnifying-glass"></i></button>
    </div>
    <div className='header_action  action_note'>
 <Link to='/' className='header_action-btn'>   <i style={{color:"lightgray"}} className="fa-solid fa-inbox"></i></Link>
    </div>

    <div className='header_action  action_cart'>
<Link to='/' className='header_action-btn'><i style={{color:"lightgray"}} className="fa-solid fa-cart-shopping"></i></Link>
    </div>
    <div className='header_action  action_signin'>
<Link to='/' className='header_action-btn'><i style={{color:"lightgray"}} className="fa-solid fa-arrow-right-to-bracket"></i></Link>
    </div>
</div>
<button onClick={toggleSide} type='button' className='header_btn'>
    <span></span>
    <span></span>
    <span></span>
</button>
        </div>
    </header>
  )
}

export default Header