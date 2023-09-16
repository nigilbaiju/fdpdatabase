const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://nigil:nigil@cluster0.uxq2x1a.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let sc=mongoose.Schema;
const studschema = new sc(
    {
        Admno:Number,
        Sname:String,
        Gender:String,
        Dob:String
    }
);

var studmodel =mongoose.model("stud",studschema)
module.exports=studmodel;