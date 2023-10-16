import express from "express"
import { getCustomers, addCustomers } from "../controllers/customer"
import { ApiConstants } from "../Utils"
import { handleApiAuth } from "../middlewares"

export default (router:express.Router)=>{
    router.get(`${ApiConstants.ApiBaseUrl}/customers`,handleApiAuth, getCustomers)
    router.post(`${ApiConstants.ApiBaseUrl}/customers`, handleApiAuth,addCustomers)
}