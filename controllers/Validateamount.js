import Room from "../models/Room.js"
import {razorPayPost} from "./Razorpay.js"
export const validateAmount=(req,res,next)=>{
    const data=req.body.rooms;
    let sum=0;
    console.log(data);
            Promise.all(
                data.map(async(rooms)=>{
                    const resp=await Room.findById(rooms)
                    return resp.price
                }
            )).then((values) => {
                values.map((s)=>sum+=s)
                console.log(sum);
                razorPayPost(sum,req,res,next);
              }).catch((err)=>{res.send(err)})
    
}