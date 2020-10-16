
// --------------------------------------LOADING PROCESS OF FULL SERVICE LIST WHICH ADMIN CAN SEE------------------------

import React from 'react';

const LoadAdminServerList = ({ users }) => {

    return (
        <div>
            <table className="table table-borderless" style={{ background: "white", borderRadius: "15px", padding: "10px" }}>
                <thead >
                    <tr >
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email ID</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project Details</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((serviceList) =>
                            <tr>
                                <td>{serviceList.userName}</td>
                                <td>{serviceList.userEmail}</td>
                                <td>{serviceList.userServiceName}</td>
                                <td>{serviceList.userDescription}</td>
                                <td>{serviceList.userServicePrice}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default LoadAdminServerList;