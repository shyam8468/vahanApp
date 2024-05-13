import React, { useEffect, useState } from "react";
import axio from "axios";
import { Link } from "react-router-dom"
const Persons = () => {


    const [persons,setPerson] = useState([])

    useEffect(() =>{

        const fetchAllPerson = async () =>{
            try{
                const res = await axio.get("http://localhost:8800/persons")
                console.log(res)
                setPerson(res.data)
            }
            catch(err){
                console.log(err)
            }

        }
        fetchAllPerson();
    },[])

    const handleDelete =  async (id)=>{
            try{
                await axio.delete("http://localhost:8800/persons/"+id)
                window.location.reload()
            }
            catch(err){
                console.log(err)
            }
    }


    // return (
    //         <div>
    //             {/* <h1>Person Information</h1> */}

    //             <div className="persons">
    //             {persons.map(person => (
    //                 <div className="person" key={person.id}>
    //                     <h2>Name : {person.first_name + " "+person.last_name}</h2>
    //                     <h2>City : {person.city}</h2>
    //                     <h2>State: {person.State}</h2>
    //                     <h2>Mobile No : {person.mobile}</h2>
    //                     <h2>Email : {person.email} </h2>
    //                     <a> Bio : {person.bio} </a><br></br><br></br>
    //                     <button className="delete" onClick={()=>handleDelete(person.id)}>Delete</button><br></br><br></br>
    //                     <button className="update" ><Link to={`/updatePerson/${person.id}`}>Update</Link></button>
    //                 </div>   
    //             ))}
    //         </div><br></br>
    //         {/* <button ><Link className="addPerson" to="/addPerson">Add New Person</Link></button> */}
    //         </div>
    // )

    return (
        <div>
            {/* <h1>Person Information</h1> */}
    
            <div className="persons">
                {persons.map(person => (
                    <div className="person" key={person.id}>
                        <h3><span className="person-key">Name : </span> <span className="person-info">{person.first_name + " " + person.last_name}</span></h3>
                        <h3><span className="person-key">City : </span> <span className="person-info">{person.city}</span></h3>
                        <h3><span className="person-key">State: </span><span className="person-info">{person.State}</span></h3>
                        <h3><span className="person-key">Mobile No :</span> <span className="person-info">{person.mobile}</span></h3>
                        <h3><span className="person-key">Email : </span><span className="person-info">{person.email}</span></h3>
                        <a>Bio : <span className="person-info">{person.bio}</span></a><br /><br />
                        <button className="delete" onClick={() => handleDelete(person.id)}>Delete</button><br /><br />
                        <button className="update"><Link to={`/updatePerson/${person.id}`}>Update</Link></button>
                    </div>
                ))}
            </div><br />
            {/* <button ><Link className="addPerson" to="/addPerson">Add New Person</Link></button> */}
        </div>
    )
    
    

}

export default Persons