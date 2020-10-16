
// --------------------------------------NAVBAR OF HOME PAGE------------------------

import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
        const history = useHistory()
    const handleLogin = () => {
        history.push(`/login`);
    }
    const handleOrder = () => {
        history.push(`/finalOrder`);
    }
    const handleAdmin = () => {
        history.push(`/adminServiceList`);
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"> <img class="img-fluid" style={{height:"50px"}} src="https://i.ibb.co/R2c50JK/logo.png" alt=""/> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mr-3">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Our Portfolio</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Our team</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" > <button style={{width:"100px"}} onClick={handleLogin} type="button" class="btn btn-dark">Login</button> </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;