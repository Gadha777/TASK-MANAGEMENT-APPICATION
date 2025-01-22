import express ,{json} from 'express';
import { adminroute } from './Route/adminroute.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app=express();
app.use(
    cors({ 
      origin: "http://localhost:3000",
      credentials: true
    })
  );
app.use(json());
app.use(cookieParser());
app.use('/',adminroute)
const port=5000;
app.listen(port,()=>{console.log(`server listen to the ${port}`)})