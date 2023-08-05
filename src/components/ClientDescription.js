import React, { useState } from 'react' 
import BodyMeasurement from './BodyMeasurement';
import Description from './Description';

const ClientDescription = () => {    
  
  const [clientData,setclientData]=useState({name:"",number:"",address:"",dod:"",noi:"",totalbill:"",bodyMeasurement:[],Description:""})
        const ChangeValue=(event)=>{
            const {name,value}=event.target;
            setclientData((prevFormDate)=>({...prevFormDate,[name]:value}));
        }
        var update=()=>{};
        var updateMeasurement=()=>{}
          const savemeasure=(bodyMeasurement,setMeasurementData)=>{
            clientData.bodyMeasurement=bodyMeasurement;
           updateMeasurement=setMeasurementData;
          }
          const savedescription=(description,setdescription)=>{
            clientData.Description=description;
            update=  setdescription;
          }
          
        const SaveChanges=async(event)=>{
             event.preventDefault();
            const {name,number,address,dod,noi,totalbill,bodyMeasurement,Description}=clientData;
            const res= await fetch(
              "https://wicunaclientsdata-default-rtdb.firebaseio.com/wicunadata.json",
              {
                  method:"POST",
                  headers:{
                      "Content-Type":"application/json",
                  }, 
                  body:JSON.stringify({
                    name,number,address,dod,noi,totalbill,bodyMeasurement,Description
                  })
              }
            )
            if(res.statusText==="OK"){
              const date =new Date().toJSON().slice(0, 10);
                var url="Name Of Customer: "+clientData.name+"%0a"
                +"Address: "+clientData.address+"%0a"
                +"Date Of Appointment: "+date+"%0a"
                +"No. Of Items: "+clientData.noi+"%0a"
                +"Date Of Delivery: "+clientData.dod+"%0a"
                +"Total Bill: "+clientData.totalbill+"(5% gst additonal)%0a";
                var whatsappurl="https://wa.me/"+clientData.number+"?text="
                                +"WicunaKraft Order Summary %0a"+url;
                                window.open(whatsappurl,"_blank").focus();
             
                
            };
      }

      const SendDetails=()=>{
        const date =new Date().toJSON().slice(0, 10);
        var url="Name Of Customer: "+clientData.name+"%0a"
                +"Address: "+clientData.address+"%0a"
                +"Date Of Appointment: "+date+"%0a"
                +"Number: "+clientData.number+"%0a"
                +"No. Of Items: "+clientData.noi+"%0a"
                +"Date Of Delivery: "+clientData.dod+"%0a"
                +"Total Bill: "+clientData.totalbill+"(5% gst additonal)%0a";
                var whatsappurl="https://wa.me/8178909878?text="
                                +"WicunaKraft Client Order Summary %0a"+url;
                                window.open(whatsappurl,"_blank").focus();

                                setclientData({
                                  name:"",number:"",address:"",dod:"",noi:"",totalbill:""
                                });
                                  update("");
                                  updateMeasurement({
                                    KurtiLength:"",BlouseLength:"",Shoulder:"",UpperChest:"",Chest:"",UpperWaist:"",Waist:"",Tummy:"",Hip:"",ChestLength:"",WaistLength:"",HipLength:"",Armhole:"",UpperArm:'',SleevesLength:'',SleevesBottom:"",FrontNeck:"",BackNeck:"",FrontCross:"",BackCross:"",BottomLength:"",BottomWaist:"",Thigh:"",Knee:"",Calve:"",Mori:""
                                  })
                                
      }
  return (
    <>    
          <br/>
          <br/>
         <div className='input_class'>
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
              <br/>
              <input type="text"className='input_class inner' name="totalbill" value={clientData.totalbill} onChange={ChangeValue}  placeholder='Total Bill'/>

          </div>
        <div className='clientForm'>
             <BodyMeasurement measurement={savemeasure}/>
        </div>
              
        <Description description={savedescription}/>
       
        <button type="submit" style={{marginLeft:"41%",marginTop:"2%",width:"15%",height:"40px",backgroundColor:"green"}} onClick={SaveChanges}>Save Data</button>
        <button type="submit" style={{marginLeft:"41%",marginTop:"2%",width:"15%",height:"40px",backgroundColor:"green"}} onClick={SendDetails}>Send Details</button>
       
        </div>
    </>
   
  )
}

export default ClientDescription
