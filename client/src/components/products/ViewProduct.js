import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function ViewProduct() {

    const [product, setproduct] = useState([]);

    //fetching all the productDB  rows from the database
    useEffect(() => {
        axios.get("http://localhost:5000/product/retrieve").then((res) => {
            if (res.data.length > 0) {
                setproduct(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [])



    return (
        <div className="display-box">
            <div className="header-box">
                <div>View Product</div>

                <div className="total-inventory-display">
                
                    <span id="total-inventory-display-total">{product.length}</span> <br />
                    <span id="total-inventory-display-text"style={{marginLeft:160}}>Total products</span>
                </div>
            </div>

            <div className="content-box-list">
                <table >
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.slice(0).reverse().map(function (f) {
                                return <tr>

                                    <td >{f.user_id}</td>
                                    <td >{f.name} </td>
                                    <td >{f.quantity} </td>
                                    <td >{f.description} </td>
                                   
                                    <td > <Link to={"./EditProducts/" + f._id} ><i class="far fa-edit"></i></Link></td>

                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >

    )
}