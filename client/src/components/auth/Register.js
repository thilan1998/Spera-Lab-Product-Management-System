import axios from 'axios';
import React, {useContext, useState} from 'react';
import AuthContext from '../../context/AuthContext';


export default function Register() {

    //define the useState to capture user entere data

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const {getLoggedIn} = useContext(AuthContext);


    async function register(e){
        e.preventDefault();
        alert(email);

        try{
            const registerData = {
                email,
                password,
                passwordVerify, 
                firstName,
                lastName,
                phone, 
                address,
            };

            await axios.post("http://localhost:5000/auth/", registerData);
            getLoggedIn();

        }catch(err){
            console.error(err);

        }

    }
    return (
        <div>
            <h1>Register a new account</h1>

            <form onSubmit= { register } >

                <input type="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                <input type="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <input type="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />
                <input type="phone" placeholder="Phone"onChange={(e) => setPhone(e.target.value)} value={phone}/>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="password" placeholder="Password"onChange={(e) => setPassword(e.target.value)} value={password}/>
                <input type="password" placeholder=" Verify your Password"onChange={(e) => setPasswordVerify(e.target.value)} value={passwordVerify}/>

                <button type="submit">Register</button>

            </form>
            
        </div>
    );
}
