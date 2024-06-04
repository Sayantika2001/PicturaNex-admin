import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product from '../Assets/add_product.png'
import list_product from '../Assets/list_product.png'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={add_product} alt="" />
                <p>Add Image</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={list_product} alt="" />
                <p>Image List</p>
            </div>
        </Link>

    </div>
  )
}

export default Sidebar