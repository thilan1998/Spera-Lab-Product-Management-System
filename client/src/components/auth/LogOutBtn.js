import axios from 'axios';
import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router';

export default function LogOutBtn() {

        const {getLoggedIn} = useContext(AuthContext);

        const history = useHistory();

    async function logOut(){
        await axios.get("http://localhost:5000/auth/logOut");
        await getLoggedIn();
        history.pushState("/");
    }
    
    return <button onClick={ logOut }> Log out </button>;
};
