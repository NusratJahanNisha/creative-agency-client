
// ---------------------------------------ADMIN ADD SERVICE SECTION----------------------------

import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddService = () => {
    const formData = new FormData()
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState({})
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('description', info.description)
        fetch('http://localhost:9000/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div class="container">
            <div>
                <AdminNavbar></AdminNavbar>
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-md-9" style={{ backgroundColor: "#F4F7FC", height: "100vh",padding: "50px" }}>
                        <form style={{background:"white", borderRadius:"15px",padding:"40px"}} onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Service Title</label>
                                <input style={{width:"400px"}} onBlur={handleBlur} name="name" type="text" class="form-control" placeholder="Enter title" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Description</label> <br/>
                                <input style={{width:"400px", height:"70px"}} onBlur={handleBlur} name="description" type="text"  class="form-control"placeholder="Enter Description" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Icon</label>
                                <input  style={{width:"400px", border:"white",padding:"0"}} onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Upload image" />
                            </div>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;
