import express from "express";
import { db } from "../lib/db";

export const getCustomers = async (req:express.Request, res:express.Response) =>{
    try {
        const customers = await db.customer.findMany();
        return res.status(200).json(customers)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"internal server error"
        })
    }
}

export const addCustomers = async(req:express.Request, res:express.Response) =>{
    try {
        const {firstname,lastname,email} =  req.body
        
        if(!firstname || !lastname || !email){
            return res.status(400).json({
                message:"invalid request"
            })
        }
        const customer = await db.customer.create({
            data:{
                firstname: firstname,
                lastname: lastname,
                email: email
            }
        })
        return res.status(200).json(customer)
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}