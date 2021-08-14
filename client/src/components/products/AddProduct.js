import React, { useState, useEffect } from 'react';
import './AddProduct.css'
import axios from 'axios'


export default function AddProduct() {

    
    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [quantity, setquantity] = useState("");
    const [user_id, setuserid] = useState("");

 

   
    //sending collected data to the database
    function sendData(e) {
        e.preventDefault();

        const newProduct = {
            name,description, quantity,user_id
        }

        axios.post(" http://localhost:5000/product/add", newProduct).then(() => {
        
            window.location = "/bar-manager/viewbeverages"

        }).catch((e) => {
            alert("error");
        })

    }



    return (

        <div className="display-box">


            <div className="header-box"> Add Beverages
            </div>

            {/* <hr /> */}
            <div className="content-box">

                <form onSubmit={sendData}>

                    <div className="form1">


                        
                    <label className="custom-field">
                            <input type="text" className="form-input" id="user_id"
                            onChange={(e) => {
                                setuserid(e.target.value)
                            }}
                            />
                            <span className="placeholder">user ID</span>
                        </label>
                     

                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="name" onChange={(e) => {
                                setname(e.target.value)
                            }} required />
                            <span className="placeholder">product name</span>
                        </label>
                        <br />


                    </div>
                    <div className="form2">
                        <div className="form2-content">

                            

                            <br />

                            <label className="custom-field">
                                <input type="number" className="form-input" id="quantity" onChange={(e) => {
                                    setquantity(e.target.value)
                                }} />
                                <span className="placeholder">quantity</span>
                            </label>

                            <label className="custom-field">
                                <input type="text" className="form-input" id="description" onChange={(e) => {
                                    setdescription(e.target.value)
                                }} />
                                <span className="placeholder">description</span>
                            </label>

                            <br />
                            




                        </div>
                        <div className="form2-btn">
                            <button className="addinventory-btn">ADD PRODUCT</button>
                        </div>

                    </div>

                </form>
            </div>



        </div>
    )

}