
import React,{useState,useEffect,useContext} from "react";


// internal import 
import {
  Table,
  Form,
  Service,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
  ShipmentCount
} from "../Components/index";


import {TrackingContext} from  "../Context/TrackingContext";
const index=()=>{
  const{
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentCount,
  } = useContext(TrackingContext);


  // state variable
  const [createShipmentModel, setCreateShipmentModel]= useState(false);
  const [openProfile, setOpenProfile]= useState(false);
  const [startModal,setStartModal]= useState(false);
  const[completeModal,setCompleteModal]=useState(false);
  const [getModel, setGetModal]= useState(false);


  // data state variable
    const [allShipmentsdata,setallShipmentsdata]=useState();


    useEffect (()=>{
      const getCampaignsData =getAllShipment();

      return async ()=>{
        const allData= await getCampaignsData;
        setallShipmentsdata(allData);
      };
    }, []);

    return(
      < >
      <Service
       setOpenProfile= {setOpenProfile}
       setCompleteModal= {setCompleteModal}
       setGetModal= {setGetModal}
       setStartModal= {setStartModal}
      
       />
      
      <Table 
      setCreateShipmentModel ={setCreateShipmentModel}
       allShipmentsdata={allShipmentsdata}

      
      />
      <Form 
       createShipmentModel = {createShipmentModel}
       createShipment= {createShipment}
       setCreateShipmentModel = {setCreateShipmentModel}      
      />

      <Profile
       openProfile = {openProfile}
       setOpenProfile = {setOpenProfile}
       currentUser= {currentUser}
       getShipmentCount={getShipmentCount}
      
      />
      <CompleteShipment
      completeModal ={completeModal}
      setCompleteModal={setCompleteModal}
      completeShipment={completeShipment}
      />
      <GetShipment
       getModel={getModel}
       setGetModal={setGetModal}
       getShipment={getShipment}
      />
      <StartShipment
      startModal={startModal}
      setStartModal={setStartModal}
      startShipment={startShipment}
      />
     

      </>
    );
};

export default index;




