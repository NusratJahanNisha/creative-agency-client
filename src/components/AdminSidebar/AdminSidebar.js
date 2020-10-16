
// --------------------------------------SIDEBAR FOR ADMIN---------------------------

import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const AdminSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch("http://localhost:9000/isAdmin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            })
    }, [])
    const history = useHistory()
    const handleServiceList = () => {
        history.push(`/adminServiceList`);
    }
    const handleFinalOrder = () => {
        history.push(`/addService`);
    }
    const handleMakeAdmin = () => {
        history.push(`/makeAdmin`);
    }
    return (
        <div>

            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li onClick={handleServiceList}>
                        <FontAwesomeIcon icon={faClipboardList} /> <span>Service list</span>
                    </li>
                    <li onClick={handleFinalOrder}>
                        <FontAwesomeIcon icon={faPlus} /> <span>Add service</span>
                    </li>

                    <li onClick={handleMakeAdmin}>
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </li>
                </ul>
            </div>



        </div>
    );
};

export default AdminSidebar;