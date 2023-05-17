import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import connectToDatabase from "./config/database.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectToDatabase();
const port = process.env.PORT || 5000;
const app = express();

//middleware before the routes
app.use(express.json());
app.use(cors());


//routes
app.use("/api/users", userRoute);

//middleware after the routes
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log("Server is already running..."));
