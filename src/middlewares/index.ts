import express from "express"
import { ApiConstants } from "../Utils";

export const handleApiAuth = (req:express.Request,res:express.Response,next:express.NextFunction)=>{
    const apiKey = req.headers["x-simplexit-api-key"];
    if(!apiKey){
        return res.status(401).json({
            message:"Unauthorised"
        })
    }

    if(apiKey !== ApiConstants.ApiKey){
        return res.status(401).json({
            message:"Unauthorised"
        })
    }

    next()
}