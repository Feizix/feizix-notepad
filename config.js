import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admin:<password>@cluster-master.ztb98.mongodb.net/?retryWrites=true&w=majority";
