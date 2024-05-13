import React, { useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";

const AddPerson = () => {

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

    const handleChange = (e) =>{
        setPerson((prev)=>({...prev,[e.target.name]:e.target.value}));
    }


    const handleClick = async e =>{
        e.preventDefault()

        try{
            //console.log("ggggggggggggggg",person)
            await axios.post("http://localhost:8800/persons",person)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }

    }

    return (
            <div className="form">

                <h1>Add New Person</h1>
                <input type="text" placeholder="First Name" onChange={handleChange}  name="first_name" />
                <input type="text" placeholder="Last Name" onChange={handleChange} name="last_name" />
                <input type="text" placeholder="City" onChange={handleChange} name="city" />
                <input type="text" placeholder="State" onChange={handleChange} name="state" />
                <input type="text" placeholder="Mobile No" onChange={handleChange} name="mobile" />
                <input type="text" placeholder="Email" onChange={handleChange} name="email" />
                <input type="text" placeholder="Bio" onChange={handleChange} name="bio" />
                <button className="submit" onClick={handleClick}>Add</button>

            </div>
    )
}

export default AddPerson