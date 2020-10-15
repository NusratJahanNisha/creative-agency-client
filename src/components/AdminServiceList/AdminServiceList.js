import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminServiceList = () => {
    const [allServiceList, setAllServiceList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9000/allServiceList`)
            .then(res => res.json())
            .then(data => allServiceList(data));
    }, []
    )
    return (
        <div class="container">
            <AdminNavbar></AdminNavbar>
            <div className="row">
                <div className="col-md-3">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-9" style={{ backgroundColor: "#F4F7FC", height: "100vh" }}>
                    <div style={{ background: "white", margin: "15px" }}>

                        <table className="table table-borderless" style={{ background: "white" }}>
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
                                    allServiceList.map((serviceList) =>

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
                </div>
            </div>

        </div>
    );
};

export default AdminServiceList;