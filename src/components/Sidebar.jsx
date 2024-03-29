import React, { useContext, useEffect, useState } from 'react'
import { Music_Context } from '../context'
import logo from './../../public/Logo.png'
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const {sideBar,setSideBar} = useContext(Music_Context);
    const [active,setActive] = useState('');
    const [drop,setDrop] = useState(false);
    const location = useLocation();

    function close(){
        setSideBar(false);
    }

    useEffect(()=>{


if(location.pathname == '/'){
setActive('Home')
}


    },[location])


function dropShow(){

    setDrop(prev => !prev)
    console.log(drop)
}

  return (
  
    <div className={`sidebar ${sideBar?'sidebar--active':null}`}>

        <div className='sidebar-logo'>
            <img src={logo}/>

            <i onClick={close} className="fa-solid fa-xmark"></i>
        </div>

        <ul className='sidebar-content'>

<li className='sidebar-item'>
<Link className='sidebar-link'>
<i className={`fa-solid fa-house ${active == 'Home'?'item-active':null}`}></i>
<span>Home</span>
</Link>
</li>


<li className='sidebar-item'>
<Link className='sidebar-link'>
<i className={`fa-solid fa-music ${active == 'Release'?'item-active':null}`}></i>
<span>Releases</span>
</Link>
</li>


<li className='sidebar-item'>
<Link className='sidebar-link'>
<i className={`fa-solid fa-user ${active == 'Artist'?'item-active':null}`}></i>
<span>Artists</span>
</Link>
</li>
<li className='sidebar-item'>
<Link className='sidebar-link'>
<i className={`fa-regular fa-calendar-days ${active == 'Event'?'item-active':null}`}></i>
<span>Events</span>
</Link>
</li>
<li className='sidebar-item'>
<Link className='sidebar-link'>
<i className={`fa-solid fa-microphone ${active == 'Podcast'?'item-active':null}`}></i>
<span>Podcasts</span>
</Link>
</li>
<li className='sidebar-item'>
<Link className='sidebar-link'>
<i className={`fa-solid fa-store ${active == 'Store'?'item-active':null}`}></i>
<span>Store</span>
</Link>
</li>

<li onClick={dropShow} className='sidebar-item'>
<Link className='sidebar-link'>
<i className="fa-solid fa-folder"></i>
<span>Pages</span>
<i style={{fontSize:"10px"}} className="fa-solid fa-angle-down"></i>
</Link></li>

<li  className={`sidebar-item ${drop?'drop--active':null}`}>
    <Link className='sidebar-link'>Artist</Link>
    <Link className='sidebar-link'>Event</Link>
    <Link className='sidebar-link'>Release</Link>
    <Link className='sidebar-link'>Product</Link>
    <Link className='sidebar-link'>Cart</Link>
    <Link className='sidebar-link'>Profile</Link>
    <Link className='sidebar-link'>Article</Link>
    <Link className='sidebar-link'>About</Link>
    <Link className='sidebar-link'>Pricing Plans</Link>
    <Link className='sidebar-link'>Privacy Policy</Link>
    <Link className='sidebar-link'>Sign in</Link>
    
    <Link className='sidebar-link'>Sign up</Link>
    
    
</li>

        </ul>
    
    </div>
    
  )
}

export default Sidebar