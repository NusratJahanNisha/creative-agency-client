
// -----------------------------------MAKE ADMIN SECTION WHERE ADMIN CAN MAKE ANOTHER ADMIN AND GIVE ADMIN PANEL ACCESS------------------------

import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
            const newAdmin = { ...data}
            console.log(newAdmin);    
            fetch("http://localhost:9000/addAdmin", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newAdmin )
            }) 
              .then(res => res.json())
              .then(data => {
                console.log(data);
                alert("Your admin is created successfully.")
              })   
    }
    return (
        <div class="container">
            <AdminNavbar></AdminNavbar>
            <div className="row">
                <div className="col-md-3">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-9" style={{backgroundColor:"#F4F7FC", height:"100vh",padding: "50px" }}>
                <form style={{background:"white", borderRadius:"15px",padding:"40px"}} className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    
                        <input name="email" style={{ margin: '3px', marginLeft: "40px", width: '300px', height: '40px', border: "white", padding: "15px" , boxShadow: "3px 3px 3px 3px lightGrey"}}  ref={register({ required: true })} placeholder="jon@gmail.com" />
                        {errors.email && <span className="error" style={{ color: "red", margin: "5px" }}> Email is required</span>} 

                        <input style={{ marginTop: '10px', width: '100px', height: '40px', color: "white", backgroundColor: "green" }} type="submit" /> <br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;