import {config} from "dotenv"
import {z} from "zod";
config();

const EnvSchema = z.object({
    PORT: z.string({message: "Port is required"}).optional().default("8000"),
    
})

const env = EnvSchema.parse(process.env);

export default env