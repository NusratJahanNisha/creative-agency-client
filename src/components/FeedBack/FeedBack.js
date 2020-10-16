
// --------------------------------------DATA LOADING PROCESS OF USER FEEDBACK FROM SERVER------------------------

import React, { useEffect, useState } from 'react';
import FeedBackDeatails from './FeedBackDeatails';

const FeedBack = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:9000/reviewAll`)
            .then(res => res.json())
            .then(data => setFeedback(data));
    }, []
    )
    console.log("feedback", feedback);

    return (
        <div style={{ margin: "100px", marginBottom: "500px" }}>
            <h3 style={{ textAlign: "center" }}> <b> <span style={{ color: "##111430" }}></span> Clients <span style={{ color: "#7DB45D" }}>Feedback</span> </b></h3>
            <div>
                {
                    feedback.map(feedBack => <FeedBackDeatails key={feedBack._id} feedBack={feedBack}></FeedBackDeatails>)
                }


            </div>

        </div>
    );
};

export default FeedBack;