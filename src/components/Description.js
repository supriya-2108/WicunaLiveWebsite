import React, { useState } from 'react'

const Description = (props) => {
    const [description,setdescription]=useState("");
    const saveDesc=(event)=>{
        setdescription(event.target.value);
       
    }
    const clickedbutton=()=>{
        props.description(description);
}
  return (
    <>
        {/* <h3 style={{marginTop:"0.5%"}}>DESCRIPTION</h3> */}
        <textarea style={{height:"200px",width:"200px",marginLeft:"4%",marginTop:"4%"}} name="decription" value={description} onChange={saveDesc} placeholder='Enter Detailed Description'/>
    <button onClick={clickedbutton}  style={{width:"15%",height:"40px",backgroundColor:"Orange",marginLeft:"5%"}}>Save Description</button>
    </>
  )
}

export default Description
