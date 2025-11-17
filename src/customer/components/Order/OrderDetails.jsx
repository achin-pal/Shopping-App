import React from "react";
import AddressCard from "../Address/AddressCard";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";;


const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>

        <AddressCard></AddressCard>
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3}></OrderTracker>
      </div>

      <Grid container className='space-x-5 space-y-5' >

      {[1,1,1,1,1].map((item)=>   <Grid item container className='dhadow-xl rounded-md p-5 border py-20' 
         sx={{alignItems:"center",
         justifyContent:"space-between"}}>

             <Grid item xs={6}>
               <div className="flex items-center space-x-4">
                 <img className='w-[5rem] h-[5rem] object-cover object-top'
                      src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                      alt=""
                   />
                   <div className="space-y-2 ml-5">
                      <p className="font-semibold">Mens Slim Mid Srise Black Jean</p>
                      <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color : Pink</span> <span>Size : M</span></p>
                      <p>Seller : Amazon</p>
                      <p>$1089</p>
                   </div>
               </div>

             </Grid>

             <Grid item>

               <Box sx={{color:deepPurple[500]}}>

                 <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2 text-5xl"></StarBorderIcon>
                 <span> Rate & Review Product</span>

               </Box>

             </Grid>

         </Grid>)}

      

      </Grid>
    </div>
  );
};

export default OrderDetails;
