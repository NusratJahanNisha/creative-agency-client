import React, { useContext, useState } from 'react';
import { ServiceContext, UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import UserNavbar from '../UserNavbar/UserNavbar';
import { useForm } from 'react-hook-form';

const OrderDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    // const [serviceDetails, setServiceDetails] = useState(null);
    const [serviceDetails, setServiceDetails] = useContext(ServiceContext);
    const onSubmit = data => {
    console.log(data);
        const newUser = { ...data}
        console.log(newUser);    
        fetch("http://localhost:9000/addUserDetails", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser)
        }) 
          .then(res => res.json())
          .then(data => {
            console.log(data);
            alert("Your order is placed successfully.")
          })   
}

return (
    <div style={{backgroundColor:"#F4F7FC", height:"89vh"}}>


        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="userName" style={{ margin: '10px',marginLeft:"40px",marginTop:"70px", width: '300px', height: '40px', border:"white",padding:"15px" }} defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name/company's name" /> 
            {errors.userName && <span className="error" style={{ color: "red", margin: "5px" }} >Your name/company name is required </span>} <br/>

            <input name="userEmail" style={{ margin: '10px',marginLeft:"40px", width: '300px', height: '40px', border:"white",padding:"15px"  }} defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your email address" />
            {errors.userEmail && <span className="error" style={{ color: "red", margin: "5px" }}>Email is required</span>} <br/>

            <input name="userServiceName" style={{ margin: '10px',marginLeft:"40px", width: '300px', height: '40px', border:"white",padding:"15px"  }}  ref={register({ required: true })}          defaultValue={serviceDetails.serviceName} placeholder="Service name" />
            {errors.userServiceName && <span className="error" style={{ color: "red", margin: "5px" }}>Service name is required</span>} <br/>

            <input name="userDescription" style={{ margin: '10px',marginLeft:"40px", width: '300px', height: '40px' , border:"white",padding:"15px" }}   ref={register({ required: true })}             defaultValue={serviceDetails.serviceDetails} placeholder="Project details" /> 
            {errors.userDescription && <span className="error" style={{ color: "red", margin: "5px" }}>Project details is required</span>}<br/>

            <input name="userServicePrice" type="number" style={{ margin: '10px',marginLeft:"40px", width: '300px', height: '40px' , border:"white",padding:"15px" }}              defaultValue={serviceDetails.servicePrice}  ref={register({ required: true })} placeholder="Price" />
            {errors.userServicePrice && <span className="error" style={{ color: "red", margin: "5px" }}>Price is required</span>}  <br/>

            <input style={{ margin: '10px', width: '100px',marginLeft:"40px", height: '40px', color: "white", backgroundColor: "black" }} type="submit" /> <br/>
        </form>


        {/* <form >
            <input onBlur={handleBlur} style={{ margin: '10px', width: '300px', height: '40px' }} value={loggedInUser.name} required placeholder="Your name/company's name" type="text"/> <br/>
            <input onBlur={handleBlur} style={{ margin: '10px', width: '300px', height: '40px' }} value={loggedInUser.email} required placeholder="Your email address" type="text"/> <br/>
            <input style={{ margin: '10px', width: '300px', height: '40px', color: "white", backgroundColor: "black" }} type="submit" value="Send"/>
        </form> */}

    </div>
);
};

export default OrderDetails;