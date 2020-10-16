
// -------------------------------------AFTER CLICKING A SERVICE,USER WILL SEE THIS PAGE ------------------------

import React from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import Sidebar from '../Sidebar/Sidebar';
import UserNavbar from '../UserNavbar/UserNavbar';

const FinalOrder = () => {
    return (
        <div class="container">
            <div>
            <UserNavbar></UserNavbar>
            <div className="row">
                <div className="col-md-3 col-sm-12"><Sidebar></Sidebar></div>
                <div className="col-md-9 col-sm-12"> <OrderDetails></OrderDetails></div>
            </div>  
            </div>
        </div>
    );
};

export default FinalOrder;