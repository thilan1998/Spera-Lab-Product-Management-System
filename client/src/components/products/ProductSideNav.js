import React from 'react';
//import './sidenav.css'
import { Link } from 'react-router-dom'
import AddProduct from './AddProduct';



export default function ProductSideNav() {
    return (
        
            <div className="sidenav">
                
                <Link to="/ViewProduct">View Product</Link>
                <Link to="/ViewProduct/AddProduct">Add Product</Link>
                
                
            </div>
    );
}