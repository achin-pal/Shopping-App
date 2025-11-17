import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  {
    label: "Order Processing",
    Value: "Order Processing",
  },
  {
    label: "On the Way",
    Value: "On the Way",
  },
  {
    label: "Delivered",
    Value: "Delivered",
  },
  {
    label: "Order cancelled",
    Value: "Order cancelled",
  },
  {
    label: "Returned",
    Value: "Returned",
  },
];

const Order = () => {
  return (
    <div className="px:5 lg:px-20">
      <Grid container className="space-x-20">
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
             {orderStatus.map((option)=> <div className="flex items-center">
                <input type="checkbox" defaultValue={option.Value} 
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"></input>
                <label className='ml-3 text-sm text-gray-300' htmlFor={option.value}>{option.label}</label>
              </div>)}
            </div>
          </div>
        </Grid>
        <Grid item xs={9} >
        <div className="space-y-5">
       {
            [1,1,1,1,1,1].map((item)=>
            <OrderCard></OrderCard>)
        }
        </div>
       
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
