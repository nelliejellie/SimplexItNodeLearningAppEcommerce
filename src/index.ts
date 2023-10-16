import express from "express"
import router from "./routers";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())

const port = process.env.SERVER_PORT || 3000;

app.listen(port, ()=>{
    console.log("running on port 3000")
})

app.use(router());