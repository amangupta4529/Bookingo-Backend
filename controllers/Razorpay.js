import express from "express";
import shortid from "shortid" 
import Razorpay from "razorpay";

export const razorPayPost=async(amount,req,res,next)=>{
    const razorpay=new Razorpay({
        key_id:"rzp_test_gjARfUjUfUjwU8",
        key_secret:"9eDsH0MWpZjRvz4fdxsLz4dJ"
    })
   const payment_capture=1;
   const currency='INR';
   const options={
    "amount":amount*100,
    currency:currency,
    receipt:shortid.generate(),
    payment_capture
   }
   try{
        const response=await razorpay.orders.create(options);
        console.log(response);
        res.json({id:response.id,
        currency:response.currency,
        amount:response.amount
    })
   }catch(error){
    console.log("error");
    res.send(error);
   }

}