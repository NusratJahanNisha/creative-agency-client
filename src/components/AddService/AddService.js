import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        const newService = { ...data }
        fetch("http://localhost:9000/addService", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Your service is created successfully.You'll see it on the home page.Visit home page to see your service")
            })
    }
    return (
        <div class="container">
            <AdminNavbar></AdminNavbar>
            <div className="row">
                <div className="col-md-3">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-9" style={{ backgroundColor: "#F4F7FC", height: "100vh" }}>

                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                        <div style={{ background: "white", marginTop: "10px", padding: "10px", borderRadius: "10px", marginBottom: "10px" }}>
                            <input name="adminServiceTitle" style={{ margin: '10px', marginLeft: "20px", marginTop: "30px", width: '300px', height: '40px', boxShadow: "3px 3px 3px 3px lightGrey", border: "white", padding: "15px" }} ref={register({ required: true })} placeholder="Enter service title " />
                            {errors.adminServiceTitle && <span className="error" style={{ color: "red", margin: "5px" }} >Service title is required </span>} <br />

                            <input name="adminServiceDescription" style={{ margin: '10px', marginLeft: "20px", width: '300px', height: '40px', border: "white", padding: "15px", boxShadow: "3px 3px 3px 3px lightGrey" }} ref={register({ required: true })} placeholder="Enter Description" />
                            {errors.adminServiceDescription && <span className="error" style={{ color: "red", margin: "5px" }}>Description is required</span>}<br />
                        </div>

                        <input style={{ margin: '10px', width: '100px', marginLeft: "30px", height: '40px', color: "white", backgroundColor: "#75AA57" }} type="Submit" /> <br />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;