import React from 'react';

const FeedBackDeatails = (props) => {
    const { name, image, feedBack, work } = props.feedBack;
    return (
        <div>
            <div style={{
                border: "1px solid grey", padding: "25px", margin: "20px",
                float: "left",
                height: "280px",
                width: "30%"
                // border: "white", padding: "27px", 
                // float: "left",
                // height: "370px",
                // width: "30%"

            }}>
                <div>
                    <div style={{ float: "left", padding: "15px" }}>
                        <img style={{ width: "50%", height: "70px", width: "70px", padding: "7px" }} src={image} alt="" /> </div>
                        {/* <div className="col-md-9 col-sm-12"> */}
                        <h5 style={{paddingTop:"23px"}}>{name}</h5>
                        <h6>{work}</h6>
                </div> <br/>
                {/* </div> */}
                <p class="text-secondary">{feedBack}</p>
            </div>
        </div>
    );
};

export default FeedBackDeatails;