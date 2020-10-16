
// --------------------------------------ALL SERVICE DETAILS WHICH USER TOOK ------------------------

import React from 'react';

const UserAllOrder = (props) => {
    const { userServiceName, userDescription, serviceImage} = props.order;

    return (
        <div>
            <div style={{ float: "left", width: "45%", padding: "35px", background: "white", borderRadius: "15px", margin: "20px" }}>
                        <div >
                            <img style={{ width: "50%", height: "80px", width: "80px", padding: "7px" }} src="https://i.ibb.co/xjGN1fx/service1.png" alt="" /> </div>
                        <h5 style={{ paddingTop: "23px" }}>{userServiceName}</h5>

                        <p>{userDescription}</p>
                    </div>

        </div>
    );
};

export default UserAllOrder;