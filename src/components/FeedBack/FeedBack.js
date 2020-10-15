import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import FeedBackDeatails from './FeedBackDeatails';

const FeedBack = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [feedback, setFeedback] = useState({});
    const feedBacks = [
        {
            image: "https://i.ibb.co/QbYpDQQ/customer-1.png",
            name: "Jack ma",
            feedBack: "            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, inventore! Facere eveniet reprehenderit nostrum ipsam veniam. Natus doloribus dolorem dignissimos.",
            work: "CEO, Monpol"
        },
        {
            image: "https://i.ibb.co/QbYpDQQ/customer-1.png",
            name: "Jack ma",
            feedBack: "            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, inventore! Facere eveniet reprehenderit nostrum ipsam veniam. Natus doloribus dolorem dignissimos.",
            work: "CEO, Monpol"
        },
        {
            image: "https://i.ibb.co/QbYpDQQ/customer-1.png",
            name: "Jack ma",
            feedBack: "            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, inventore! Facere eveniet reprehenderit nostrum ipsam veniam. Natus doloribus dolorem dignissimos.",
            work: "CEO, Monpol"
        },
        {
            image: "https://i.ibb.co/QbYpDQQ/customer-1.png",
            name: "Jack ma",
            feedBack: "            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, inventore! Facere eveniet reprehenderit nostrum ipsam veniam. Natus doloribus dolorem dignissimos.",
            work: "CEO, Monpol"
        }
    ]

    // useEffect(() => {
    //     fetch(`https://whispering-fjord-15086.herokuapp.com/activity?email=` + loggedInUser.email)
    //         .then(res => res.json())
    //         .then(data => setFeedback(data));
    // }, [])
    return (
        <div style={{ margin: "70px",marginBottom:"500px" }}>
            <h3 style={{ textAlign: "center" }}> <b> <span style={{ color: "##111430" }}></span> Clients <span style={{ color: "#7DB45D" }}>Feedback</span> </b></h3>
            <div >
            {
                feedBacks.map(feedBack => <FeedBackDeatails feedBack={feedBack}></FeedBackDeatails>)
            }
            </div>

        </div>
    );
};

export default FeedBack;