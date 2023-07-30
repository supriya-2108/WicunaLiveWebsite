import React, { useState } from 'react' 
import BodyMeasurement from './BodyMeasurement';
import Description from './Description';

const ClientDescription = () => {    
  
  const [clientData,setclientData]=useState({name:"",number:"",address:"",dod:"",noi:"",type:"",bodyMeasurement:[],Description:""})
        const ChangeValue=(event)=>{
            const {name,value}=event.target;
            setclientData((prevFormDate)=>({...prevFormDate,[name]:value}));
        }
          const savemeasure=(bodyMeasurement)=>{
            clientData.bodyMeasurement=bodyMeasurement;
            
          }
          const savedescription=(description)=>{
            clientData.Description=description;
            
          }
        const SaveChanges=async(event)=>{
             event.preventDefault();
            const {name,number,address,dod,noi,type,bodyMeasurement,Description}=clientData;
            const res= await fetch(
              "https://wicunaclientsdata-default-rtdb.firebaseio.com/wicunadata.json",
              {
                  method:"POST",
                  headers:{
                      "Content-Type":"application/json",

                  },
                  body:JSON.stringify({
                    name,number,address,dod,noi,type,bodyMeasurement,Description
                  })
              }
            )
      
      }
  return (
    <>    
          <br/>
          <br/>
         <form className='input_class' onSubmit={SaveChanges} >
          <div className='clientForm client'>
              <h3 style={{marginLeft:"21%",marginBottom:"2%"}}>CLIENT DESCRIPTION</h3>
              <input type="text" className='input_class inner' name="name" value={clientData.name} onChange={ChangeValue} placeholder='CLIENT NAME'/>
              <br/>
              <input type="text"  className='input_class inner' name="number" value={clientData.number} onChange={ChangeValue}  placeholder='NUMBER'/>
              <br/>
              <input type="text" className='input_class inner' name="address" value={clientData.address} onChange={ChangeValue}  placeholder='ADDRESS'/>
              <br/>
              <input type="text" className='input_class inner' name="dod" value={clientData.dod} onChange={ChangeValue} placeholder='DATE OF DELIVERY'/>
              <br/>
              <input type="text"className='input_class inner' name="noi" value={clientData.noi} onChange={ChangeValue}  placeholder='NO. OF ITEMS'/>

          </div>
        <div className='clientForm'>
             <BodyMeasurement measurement={savemeasure}/>
        </div>
              
        <Description description={savedescription}/>
        <button type="submit" style={{marginLeft:"41%",marginTop:"2%",width:"15%",height:"40px",backgroundColor:"green"}}>Save Data</button>
        </form>
    </>
   
  )
}

export default ClientDescription
