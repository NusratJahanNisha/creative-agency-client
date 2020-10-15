import React from 'react';

const LogoSection = () => {
    const logos = [
        { image: "https://i.ibb.co/3m2QMXz/airbnb.png" },
        { image: "https://i.ibb.co/Zzq0Rwy/google.png" },
        { image: "https://i.ibb.co/zZ9h4bF/netflix.png" },
        { image: "https://i.ibb.co/VHvQLJP/slack.png" },
        { image: "https://i.ibb.co/1sJFzhM/uber.png" }
    ]

    return (
        <div class="container" style={{marginTop:"100px",marginBottom:"200px"}}>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2 col-sm-4"> <img class="img-fluid" style={{ height: "60px",margin:"20px" }} src="https://i.ibb.co/3m2QMXz/airbnb.png" alt="" /> </div>
                <div className="col-md-2 col-sm-4">  <img class="img-fluid" style={{ height: "60px",margin:"20px" }} src="https://i.ibb.co/Zzq0Rwy/google.png" alt="" /> </div>
                <div className="col-md-2 col-sm-4">  <img class="img-fluid" style={{ height: "60px",margin:"20px" }} src="https://i.ibb.co/zZ9h4bF/netflix.png" alt="" /> </div>
                <div className="col-md-2 col-sm-4"> <img class="img-fluid" style={{ height: "60px",margin:"20px" }} src="https://i.ibb.co/VHvQLJP/slack.png" alt="" /> </div>
                <div className="col-md-2 col-sm-4"> <img class="img-fluid" style={{ height: "60px",margin:"20px" }} src="https://i.ibb.co/1sJFzhM/uber.png" alt="" /> </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
};

export default LogoSection;