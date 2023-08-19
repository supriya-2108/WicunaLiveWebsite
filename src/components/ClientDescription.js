import React, { useEffect, useState } from 'react' 
import BodyMeasurement from './BodyMeasurement';
import Description from './Description';
import {getDownloadURL, listAll, ref ,uploadBytes} from 'firebase/storage'
import { storage } from './Firebase';
import {v4} from 'uuid';
const ClientDescription = () => {    
  
  const [clientData,setclientData]=useState({name:"",number:"",address:"",dod:"",noi:"",totalbill:"",picture:"",bodyMeasurement:[],Description:""})
  const [fabricimageUpload,setfabricimageUpload]=useState(null); 
  const [designimageUpload,setDesignimageUpload]=useState(null);    
  const [fabricimageUrls,setFabricImageUrls]=useState([]);
  
  const [designimageUrls,setDesignImageUrls]=useState([]);
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
          }
          const fabricimagesListRef=ref(storage,'Fabrics/');
          const designimagesListRef=ref(storage,'Designs/');
          const UploadFabricImage=()=>{
            if (fabricimageUpload == null) return;
            const imageRef= ref(storage,`Fabrics/${fabricimageUpload.name + clientData.name + new Date().toJSON().slice(0, 10) + v4()}`);
            uploadBytes(imageRef,fabricimageUpload).then((snapshot)=>{
              getDownloadURL(snapshot.ref).then((url) => {
                setFabricImageUrls((prev) => [...prev, url]);
              });
            });
          } ;

          const UploadDesignImage=()=>{
            if (designimageUpload == null) return;
            const imageRef= ref(storage,`Designs/${designimageUpload.name + clientData.name + new Date().toJSON().slice(0, 10) + v4()}`);
            uploadBytes(imageRef,designimageUpload).then((snapshot)=>{
              getDownloadURL(snapshot.ref).then((url) => {
                setDesignImageUrls((prev) => [...prev, url]);
              });
            });
          } ;

         

          useEffect(() => {
            listAll(fabricimagesListRef).then((response) => {
              response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                  setFabricImageUrls((prev) => [...prev, url]);
                });
              });
            });
            listAll(designimagesListRef).then((response) => {
              response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                  setDesignImageUrls((prev) => [...prev, url]);
                });
              });
            });
          }, []);
        
                 const SaveChanges=async(event)=>{
             event.preventDefault();
            const {name,number,address,dod,noi,totalbill,picture,bodyMeasurement,Description}=clientData;
            const res= await fetch(
              "https://wicunaclientsdata-default-rtdb.firebaseio.com/wicunadata.json",
              {
                  method:"POST",
                  headers:{
                      "Content-Type":"application/json",
                  }, 
                  body:JSON.stringify({
                    name,number,address,dod,noi,totalbill,picture,bodyMeasurement,Description
                  })
              }
            )
           
          

            if(res.statusText==="OK"){
              const date =new Date().toJSON().slice(0, 10);
              const num =fabricimageUrls.length-1;
              const num1=designimageUrls.length-1;
                var url="Name Of Customer: "+clientData.name+"%0a"
                +"Address: "+clientData.address+"%0a"
                +"Date Of Appointment: "+date+"%0a"
                +"No. Of Items: "+clientData.noi+"%0a"
                +"Date Of Delivery: "+clientData.dod+"%0a"
                +"Total Bill: "+clientData.totalbill+"(5% gst additonal)%0a"+
                "Given Fabric : "+fabricimageUrls[num]+"%0a"+
                "Selected Design"+designimageUrls[num1]+"%0a";
                var whatsappurl="https://wa.me/"+clientData.number+"?text="
                                +"WicunaKraft Order Summary %0a"+url;
                                window.open(whatsappurl,"_blank").focus();
             
                
            };
      }

      const SendDetails=()=>{
        const date =new Date().toJSON().slice(0, 10);
        const blob =  fabricimageUrls[0].blob();
        const file = new File([blob], fabricimageUrls[0], {type: blob.type});
        var url="Name Of Customer: "+clientData.name+"%0a"
                +"Address: "+clientData.address+"%0a"
                +"Date Of Appointment: "+date+"%0a"
                +"Number: "+clientData.number+"%0a"
                +"No. Of Items: "+clientData.noi+"%0a"
                +"Date Of Delivery: "+clientData.dod+"%0a"
                +"Total Bill: "+clientData.totalbill+"(5% gst additonal)%0a";
                var whatsappurl="https://wa.me/8178909878?image="
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
        <Description description={savedescription}/><br/>
        <input type="file" className='input_class inner' onChange={(event)=>{setfabricimageUpload(event.target.files[0])}}/>
      <button style={{marginLeft:"-7%",width:"15%",height:"40px",backgroundColor:"orange"}}  onClick={UploadFabricImage}> Upload Fabric Images</button><br/>
      <input type="file" className='input_class inner' onChange={(event)=>{setDesignimageUpload(event.target.files[0])}}/>
      <button style={{marginLeft:"-7%",width:"15%",height:"40px",backgroundColor:"orange"}} onClick={UploadDesignImage}> Upload Design Images</button>
        <button type="submit" style={{marginLeft:"41%",marginTop:"2%",width:"15%",height:"40px",backgroundColor:"green"}} onClick={SaveChanges}>Save Data</button>
        <button type="submit" style={{marginLeft:"41%",marginTop:"2%",width:"15%",height:"40px",backgroundColor:"green"}} onClick={SendDetails}>Send Details</button>
    
        </div>
        
    </>
   
  )
}

export default ClientDescription
