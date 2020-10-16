
// --------------------------------------SHOWING FEEDBACK OF USERS AND FEEDBACK SECTION DESIGN ------------------------

import React, { useContext } from 'react';
import { UserContext } from '../../App';

const FeedBackDeatails = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { reviewerName, reviewerCompanyName, reviewerDescription } = props.feedBack;
    return (
        <div>
            <div style={{
                border: "1px solid lightGrey", padding: "30px", margin: "20px",
                boxShadow:"5px 5px 5px lightGrey",
                float: "left",
                width: "30%"


            }}>
                <div>
                    <div style={{ float: "left", padding: "15px" }}>
                        <img style={{ width: "50%", height: "70px", width: "70px", padding: "7px" }} src={loggedInUser.image} alt="" /> </div>
                    <h5 style={{ paddingTop: "23px" }}>{reviewerName}</h5>
                    <h6>{reviewerCompanyName}</h6>
                </div>
                 <br />
                <p style={{padding:"15px"}} class="text-secondary">{reviewerDescription}</p>
            </div>
        </div>
    );
};

export default FeedBackDeatails;