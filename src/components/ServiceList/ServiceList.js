import React, { useContext, useEffect, useState } from 'react';
import UserNavbar from '../UserNavbar/UserNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../App';
import UserAllOrder from '../UserAllOrder/UserAllOrder';

const ServiceList = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [userOrders, setUserOrders] = useState({});
    // useEffect(() => {
    //     fetch(`http://localhost:9000/addUserDetails` + loggedInUser.email)
    //         .then(res => res.json())
    //         .then(data => setUserOrders(data));
    //     console.log(userOrders)
    // }, [])
    return (
        <div class="container">
            <UserNavbar></UserNavbar>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9" style={{ backgroundColor: "#F4F7FC", height: "100vh" }}>
                        {/* {
                            userOrders.map(order => <UserAllOrder keu={userOrders._id} order={order}></UserAllOrder>)
                        } */}

                        {/* <UserAllOrder></UserAllOrder> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceList;