// import express
const express=require("express")
const cors=require("cors")

//Initailizing
const app=new express();

const studmodel = require('./model/studentdetail')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

//Api Creation
app.get('/',(request,response)=>{
    response.send("hai nigil")
})
app.post('/new',(request,response)=>{
    // console.log(request.body)
    new studmodel(request.body).save();
    response.send("Record Sucessfully Saved")
})
app.get('/view',async(request,response)=>{
    var data = await studmodel.find();
     response.send(data)
 })
 
 app.delete('/remove/:id',async(request,response)=>{
    let id = request.params.id
    await studmodel.findByIdAndDelete(id)
    response.send("Record deleted")
})

app.put('/edit/:id',async(request,response)=>{
    let id = request.params.id;
    await studmodel.findByIdAndUpdate(id,request.body)
    response.send("Data updated")
    })
    
    

//Assign Port 
app.listen(3005,(request,response)=>{
    console.log("Port is running in 3005")
})
