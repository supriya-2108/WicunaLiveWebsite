import React, { useState } from 'react' 
import BodyMeasurement from './BodyMeasurement';

const ClientDescription = () => {    
  
  const [clientData,setclientData]=useState({name:"",number:"",address:"",dod:"",noi:"",type:"",bodyMeasurement:[]})
        const ChangeValue=(event)=>{
            const {name,value}=event.target;
            setclientData((prevFormDate)=>({...prevFormDate,[name]:value}));
        }
          const savemeasure=(bodyMeasurement)=>{
            // event.preventDefault();
            clientData.bodyMeasurement=bodyMeasurement;
            
          }
        const SaveChanges=async(event)=>{
             event.preventDefault();
            const {name,number,address,dod,noi,type,bodyMeasurement}=clientData;
            const res= await fetch(
              "https://wicunaclientsdata-default-rtdb.firebaseio.com/wicunadata.json",
              {
                  method:"POST",
                  headers:{
                      "Content-Type":"application/json",

                  },
                  body:JSON.stringify({
                    name,number,address,dod,noi,type,bodyMeasurement
                  })
              }
            )
      
      }
  return (
    <>    
          <br/>
          <br/>
         <form className='input_class' onSubmit={SaveChanges} >
              <input type="text" className='input_class' name="name" value={clientData.name} onChange={ChangeValue} placeholder='CLIENT NAME'/>
              <br/>
              <input type="text"  className='input_class' name="number" value={clientData.number} onChange={ChangeValue}  placeholder='NUMBER'/>
              <br/>
              <input type="text" className='input_class' name="address" value={clientData.address} onChange={ChangeValue}  placeholder='ADDRESS'/>
              <br/>
              <input type="text" className='input_class' name="dod" value={clientData.dod} onChange={ChangeValue} placeholder='DATE OF DELIVERY'/>
              <br/>
              <input type="text"className='input_class' name="noi" value={clientData.noi} onChange={ChangeValue}  placeholder='NO. OF ITEMS'/>

              
             <BodyMeasurement measurement={savemeasure}/>
{/*           

            <Navbar saveinfo={savemeasure}/>
            <Description/><br/>
            <input type="text" className='heading-3' style={{marginLeft:"30%"}} placeholder='TOTAL EXPECTED BILL'/><br/> */}
        <button type="submit" style={{marginLeft:"41%",marginTop:"2%",backgroundColor:"green",height:"40px",width:"80px"}}>Save Info</button>
        </form>
    </>
   
  )
}

export default ClientDescription
