import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div class="container">
            <AdminNavbar></AdminNavbar>
            <div className="row">
                <div className="col-md-3">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-9" style={{backgroundColor:"#F4F7FC", height:"100vh"}}>
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    
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