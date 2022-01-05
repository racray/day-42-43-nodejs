import express from "express"
import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
import {Router} from './routes/data.js'


const app = express();

//MIDDLEWARE
// app.use(cors());
app.use(express.json());


dotenv.config(); // all keys it will put in  process.env

const PORT = process.env.PORT;


// const MONGO_URL = "mongodb://localhost";

// console.log(process.env)
const MONGO_URL = process.env.MONGO_URL;

// mongodb+srv://Rayed:<password>@cluster0.ufzzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("mongodb connected");
    return client;
}

export const client = await createConnection();

app.get('/',(request,response)=>{
    response.send("Hello 🌏🌍🌎");
})

app.use('/data',Router);



app.listen(PORT,()=>console.log("app started",PORT));


