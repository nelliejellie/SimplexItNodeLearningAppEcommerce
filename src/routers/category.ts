import express from "express"
import { getCategories,addCategories } from "../controllers/category"
import { handleApiAuth } from "../middlewares"
import { ApiConstants } from "../Utils"

export default (router:express.Router)=>{
    router.get(`${ApiConstants.ApiBaseUrl}/categories`,handleApiAuth, getCategories)
    router.post(`${ApiConstants.ApiBaseUrl}/categories`,handleApiAuth,addCategories)
}