import { Request, Response, Router } from "express";

const router = Router()

router.get("/sign-in", (req:Request, res:Response)=>{
    return res.status(200).json({
        message:"success"
    })
})




export default router