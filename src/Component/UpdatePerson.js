import React, { useState } from "react";
import axios from "axios";
import { useLocation,useNavigate } from "react-router-dom";


const UpdatePerson = () => {

    const navigate = useNavigate()

    const [person,setPerson] = useState({
            first_name:"",
            last_name:"",
            city:"",
            state:"",
            mobile:"",
            email:"",
            bio:""
    })


    const location = useLocation()
    //console.log(location.pathname.split('/')[2])

    const personId = location.pathname.split('/')[2]

    const handleChange = (e) =>{
        setPerson((prev)=>({...prev,[e.target.name]:e.target.value}));
    }


    const handleClick = async e =>{
        e.preventDefault()

        try{
            //console.log("ggggggggggggggg",person)
            await axios.put("http://localhost:8800/persons/"+personId,person)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }

    }

    return (
            <div className="form">

                <h1>Update Person The Person</h1>
                <input type="text" placeholder="First Name" onChange={handleChange}  name="first_name" />
                <input type="text" placeholder="Last Name" onChange={handleChange} name="last_name" />
                <input type="text" placeholder="City" onChange={handleChange} name="city" />
                <input type="text" placeholder="State" onChange={handleChange} name="state" />
                <input type="text" placeholder="Mobile No" onChange={handleChange} name="mobile" />
                <input type="text" placeholder="Email" onChange={handleChange} name="email" />
                <input type="text" placeholder="Bio" onChange={handleChange} name="bio" />
                <button className="update" onClick={handleClick}>Update</button>

            </div>
    )
}

export default UpdatePerson