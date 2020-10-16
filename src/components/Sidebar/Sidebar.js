
// -------------------------------------USER SIDEBAR------------------------

import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCommentDots, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const Sidebar = () => {
    const history = useHistory()
    const handleServiceList = () => {
        history.push(`/serviceList`);
    }
    const handleReview = () => {
        history.push(`/review`);
    }
    const handleFinalOrder = () => {
        history.push(`/finalOrder`);
    }
    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li onClick={handleFinalOrder}>
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </li>
                    <li onClick={handleServiceList}>
                        <FontAwesomeIcon icon={faClipboardList} /> <span>Service list</span>
                    </li>
                    <li onClick={handleReview}>
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </li>
                </ul>
            </div>
        </div>



    );
};

export default Sidebar;