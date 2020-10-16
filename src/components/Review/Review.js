
// --------------------------------------USER'S SERVICE REVIEW FORM------------------------

import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UserNavbar from '../UserNavbar/UserNavbar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();


    const onSubmit = data => {

            const newReview = { ...data}
            fetch(`http://localhost:9000/addReview`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newReview)
            })
              .then(res => res.json())
              .then(data => {
                alert("Your review is posted successfully.Everyone will see it on home page.Visit home page to see your review")
                console.log(data);
              })
          
        
    }
    return (
        <div class="container">
            <UserNavbar></UserNavbar>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9" style={{ backgroundColor: "#F4F7FC", height: "100vh" }}>
            
                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="reviewerName" style={{ margin: '10px', marginLeft: "40px", marginTop: "70px", width: '400px', height: '40px', border: "white", padding: "15px" }} defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
                        {errors.reviewerName && <span className="error" style={{ color: "red", margin: "5px" }} >Your name is required </span>} <br />

                        <input name="reviewerCompanyName" style={{ margin: '10px', marginLeft: "40px", width: '400px', height: '40px', border: "white", padding: "15px" }}  ref={register({ required: true })} placeholder="Company's name and Designation" />
                        {errors.reviewCompanyName && <span className="error" style={{ color: "red", margin: "5px" }}> Company's name and Designation is required</span>} <br />

                        <input name="reviewerDescription" style={{ margin: '10px',height:"90px", marginLeft: "40px", width: '400px',  border: "white", padding: "15px" }} ref={register({ required: true })} placeholder="Description" />
                        {errors.reviewerDescription && <span className="error" style={{ color: "red", margin: "5px" }}>Description is required</span>}<br />

                        <input style={{ margin: '10px', width: '100px', marginLeft: "40px", height: '40px', color: "white", backgroundColor: "black" }} type="submit" /> <br />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Review;