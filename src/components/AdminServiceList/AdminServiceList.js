// --------------------------------------FULL SERVICE LIST WHICH ADMIN CAN SEE------------------------

import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import LoadAdminServerList from './LoadAdminServerList';

const AdminServiceList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9000/adminServiceList`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []
    )
    console.log("adminServiceList", users);

    return (
        <div class="container">
            <AdminNavbar></AdminNavbar>
            <div className="row">
                <div className="col-md-3">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-9" style={{ backgroundColor: "#F4F7FC", height: "100vh" }}>
                    <div style={{ background: "white", margin: "15px" }}>
                        <LoadAdminServerList users={users}></LoadAdminServerList>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminServiceList;