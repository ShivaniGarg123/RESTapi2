var express=require('express');
var app=express();
var fs=require('fs');
var bodyParser=require('body-parser');

app.use(bodyParser.json());

app.get("/view",(req,res)=>{
    fs.readFile(__dirname+"/"+"Employee.json","utf8",(err,data)=>{
        res.send(data);
    })
});

app.post("/add",(req,res)=>{
    fs.readFile(__dirname+"/"+"Employee.json","utf8",(err,data)=>{
        data=JSON.parse(data);
        data["employee"+req.body.id]=req.body;
        fs.writeFile(__dirname+"/"+"Employee.json",JSON.stringify(data),"utf8",err=>{
            console.log("File Written Successfully");
        });
        res.send(JSON.stringify(data));
    })
});
app.put("/updation",(req,res)=>{
    fs.readFile(__dirname+"/"+"Employee.json","utf8",(err,data)=>{
        data=JSON.parse(data);
        data["employee"+req.body.id]=req.body;
        fs.writeFile(__dirname+"/"+"Employee.json",JSON.stringify(data),"utf8",err=>{
            console.log("File Written Successfully")
        });
        res.send(JSON.stringify(data));
    })
});
app.delete("/delete",(req,res)=>{
    fs.readFile(__dirname+"/"+"Employee.json","utf8",(err,data)=>{
        data=JSON.parse(data);
        delete data["employee"+req.body.id]
        fs.writeFile(__dirname+"/"+"Employee.json",JSON.stringify(data),"utf8",err=>{
            res.send(JSON.stringify(data));
        })
    })
});

app.listen(7599,()=> {
    console.log("Server is running on a port...")
});