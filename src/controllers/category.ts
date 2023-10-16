import express from "express";
import { db } from "../lib/db";

export const getCategories = async (req:express.Request, res:express.Response) =>{
    try {
        const categories = await db.category.findMany();
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}

export const addCategories = async(req:express.Request, res:express.Response) =>{
    try {
        const {name,imageUrl,metaTitle,description,metaDescription} =  req.body
        if(!name){
            return res.status(400).json({
                message:"invalid request"
            })
        }

        const existingCategory = await db.category.findFirst({
            where:{
                name:name
            }
        })

        if(existingCategory){
            return res.status(400).json({
                message:"category already exists"
            })
        }
        const category = await db.category.create({
            data:{
                name: name,
                slug: name.toLowerCase().replace(" ","-"),
                imageUrl:imageUrl,
                metaDescription:metaDescription,
                metaTitle:metaTitle,
                description:description
            }
        })
        return res.status(200).json(category)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"internal server error"
        })
    }
}