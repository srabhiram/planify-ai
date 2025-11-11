import express from "express";
import authRoutes from "../../modules/auth/routes/authRoutes"

const apiV1Routes = express();

apiV1Routes.use("/v1/auth", authRoutes)


export default apiV1Routes