import React, { useContext } from 'react';
import { UserContext } from '../../App';

const AdminNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"> <img class="img-fluid" style={{ height: "50px" }} src="https://i.ibb.co/R2c50JK/logo.png" alt="" /> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mr-3">
                            <b> <a class="nav-link" href="#"><span class="sr-only">(current)
                         <img style={{ width: "50%", height: "70px", width: "70px" }} src={loggedInUser.photoURL} alt="" /></span></a></b>
                        </li>
                        <li class="nav-item active mr-3">
                            <b> <a class="nav-link" href="#">{loggedInUser.name} <span class="sr-only">(current)</span></a></b>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default AdminNavbar;