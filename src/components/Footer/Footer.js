
// --------------------------------------FOOTER SECTION DESIGN FOR HOME PAGE------------------------

import React from 'react';

const Footer = () => {
    return (
        <footer >
            <div >
                <div className="row" style={{ backgroundColor: "#FBD062", height: "100vh", width: "205vh", padding: "70px" }}>
                    <div className="col-md-6 col-sm-12">
                        <h2 style={{ textAlign: "center" }}><b>Let us handle your project, professionally</b></h2>
                        <p style={{ textAlign: "center" }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, rerum. Quasi quae vero cupiditate sed? </p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <input style={{ height: "70px", width: "600px", margin: "12px" }} type="text" placeholder="Your email address" /> <br />
                        <input style={{ height: "70px", width: "600px", margin: "12px" }} type="text" placeholder="Your name/company's name" /> <br />
                        <textarea style={{ height: "250px", width: "600px", margin: "12px" }} placeholder="Your message" name="" id="" cols="30" rows="10"></textarea>
                        <br />
                        <button style={{ width: "150px", margin: "12px" }} type="button" class="btn btn-dark">Send</button>
                    </div>
                </div>
                <div style={{ backgroundColor: "#FBD062", height: "60px" }} > <p style={{ textAlign: "center" }}>copyright Orange right 2020</p> </div>
            </div>
        </footer>
    );
};

export default Footer;