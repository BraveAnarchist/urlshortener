import express from "express"
import cors from "cors"

const app=express();
const port =8888;
const host="127.0.0.1"
app.use(express.json());
app.use(cors());



app.get("/",()=>{
    console.log("")
})

app.use('/api',routes);

app.listen(port,host,()=>{

    console.log("server started at http://"+host+":"+port);
})