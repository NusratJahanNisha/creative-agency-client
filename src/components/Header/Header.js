import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div   style={{background:"#FBD062", height:"100vh", borderBottomRightRadius:"300px",borderBottomLeftRadius:"300px"}}>
            <div class="container" >
            <Navbar></Navbar> <br/>
            <div className="row">
                <div className="col-md-5 col-sm-12">
                   <b> <h1>Let's Grow Your</h1>
                    <h1>Brand To The</h1>
                    <h1>Next Level</h1></b> <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia, in quam corporis laudantium voluptates.</p>
                   <br/> 
                    <button style={{width:"150px"}} type="button" class="btn btn-dark">Hire Us</button>
                </div>
                <div className="col-md-7 col-sm-12">
                    <img class="img-fluid" src="https://i.ibb.co/YXGtmnh/Frame.png" alt=""/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;