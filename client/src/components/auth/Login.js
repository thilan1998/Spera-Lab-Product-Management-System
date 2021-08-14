import axios from 'axios';
import React, {useState} from 'react';

export default function Login() {

    //define the useState to capture user entere data
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    async function login(e){
        e.preventDefault();

        try{
            const loginData = {
                
                email,
                password,
                
            };

            await axios.post("http://localhost:5000/auth/login", loginData);
            alert("log in success");

        }catch(err){
            console.error(err);

        }

    }
    return (
        <div>
            <h1>Log in to your account</h1>

            <form onSubmit= { login } >

              
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="password" placeholder="Password"onChange={(e) => setPassword(e.target.value)} value={password}/>

                <button type="submit">Log in</button>

            </form>
            
        </div>
    );
}