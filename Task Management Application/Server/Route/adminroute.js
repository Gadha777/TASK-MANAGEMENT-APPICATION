import { Router } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
const adminroute=Router();

const taskSchema = new mongoose.Schema({title: {type: String,required: true, trim: true},
                                        description: {type: String,required: true},
                                        status: {type: String },
                                        priority: {type: String},
                                        createdAt: {type: Date,} });

const task =mongoose.model('TaskDetails',taskSchema);
mongoose.connect('mongodb://localhost:27017/TASKS');

adminroute.post('/addtask',async(req,res)=>{
    const taskdetails=req.body;
    const {title,description,status,priority,createdAt}= taskdetails;
    const existingtask=await task.findOne({title:title})
    if(existingtask)
        {
            res.send("this task is already added.you can update it")
        }
        else
        {
            const newtask= new task({
                title:title,
                description:description,
                status:status,
                priority:priority,
                createdAt:createdAt
               });
               await newtask.save();
               console.log('new task added successfully ');
                res.send(" new task added successfully ");
                res.status(200).json(); 
        }

});
adminroute.get('/veiwtask',async(req,res)=>{
    const alltask= await taskdetails.find();
    if(alltask.lenght===0){
        res.status(200).json({ message: 'No tasks yet' });
        }
    else
    {
        res.status(200).json(alltask);
    } 
    
})
// adminroute.put('/update',async(req,res)=>{
//    const taskupdate =req.body;
//    const{title,description,status,priority,createdAt}=taskupdate;

// })
export{adminroute};