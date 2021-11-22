var express = require("express");
var cors =require("cors");
var a = express();

a.use(cors());

const { MongoClient,ObjectId } = require('mongodb');
var url ="mongodb://localhost:27017";

var path = require("path");

const multer = require('multer');
a.use(express.static('uploads'));

const storage =multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,__dirname+'./uploads')
    },
    filename: function (req, file, cb) {
        console.log("file in filename function::",file)
        var fileext = path.extname(file.originalname);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+fileext)
    }
})
const upload = multer({storage: storage})


a.use(express.urlencoded({extended: true}))
a.use(express.json());
/* 
a.get("/",function(req,res){
    MongoClient.connect(url,function(err,con){
        var db =con.db("contractmanage");
        db.collection("contract").find()
        .toArray(function(err,data){
            res.send(data);
            })
        })
    }) */

    a.get("/getform",function(req,res){
        MongoClient.connect(url,function(err,con){
            var db =con.db("contractmanage");
            db.collection("contract").find()
            .toArray(function(err,data){
                res.send(data);
                })
            })
        })
        a.get("/getcontracttype",function(req,res){
            MongoClient.connect(url,function(err,con){
                var db =con.db("contractmanage");
                db.collection("contracttype").find()
                .toArray(function(err,data){
                    res.send(data);
                    })
                })
            })
       /*  a.get("/getincome",function(req,res){
            var category=req.body.categorytype;
            MongoClient.connect(url,function(err,con){
                var db =con.db("moneymanager");
                db.collection("bTransaction").find({categorytype:"income"},{amount:true}).toArray(function(err,data){
                    res.send(data);
                    //console.log("hello world")
                    })
                })
            })
      */
            a.post("/addwithfile",upload.single("ufile"),function(req,res){
                /* console.clear(); */
                console.log("req.file",req.file);
                req.body.ufile = req.file.filename;
                console.log("req.body",req.body);
                MongoClient.connect(url,function(err,con){
                    var db =con.db("contractmanage");
                    db.collection("contract").insertOne(req.body,function(err,data){
                        res.send(data);
                        
                    })
                    
                    })
                })
a.post("/add",upload.single("ufile"),function(req,res){    
    MongoClient.connect(url,function(err,con){
        var db =con.db("contractmanage");
        db.collection("contract").insertOne(req.body,function(err,data){
            res.send(data);
            
        })
        
        })
    })
    a.post("/addcontracttype",function(req,res){    
        MongoClient.connect(url,function(err,con){
            var db =con.db("contractmanage");
            db.collection("contracttype").insertOne(req.body,function(err,data){
                res.send(data);
                
            })
            
            })
        })
    a.delete("/remove/:_id",function(req,res){
        MongoClient.connect(url,function(err,con){
            var db =con.db("contractmanage");
            db.collection("contract").deleteOne({_id:ObjectId(req.params._id)},function(err,data){
                res.send(data);
                
            })
            
        })
    })
    a.put("/update_contract",function(req,res){
        MongoClient.connect(url,function(err,con){
            console.log(req.body)
            var db =con.db("contractmanage");
            db.collection("contract").updateOne(
                {_id:ObjectId(req.body._id)},
                {
                    $set:{
                        firstname:req.body.firstname,
                        contractname: req.body.contractname,
                        contracttype: req.body.contracttype,
                        parties: req.body.parties,
                        amount:req.body.amount,
                        startdate:req.body.startdate,
                        enddate:req.body.enddate
                    }
                },
            function(err,data){
                console.log(data)
                res.send(data)
            }
        )
            
        })
    })

   /*  a.post("/updateoldnew",function(req,res){
        MongoClient.connect(url,function(err,con){
            var db =con.db("contractmanage");
            db.collection("contract").updateOne(
                {_id:ObjectId(req.body.id)},
                {
                    $push:{
                        newcontract:req.bo
                           
                        
                    }
                },
            function(err,data){
                res.send(data)
                console.log(data)
               
            }
        )
            
        })
    })
    
    */
   /*  a.post("/updateoldnew",function(req,res){
        MongoClient.connect(url,function(err,con){
            console.log(req.body)
            var db =con.db("contractmanage");
            db.collection("contract").updateOne(
                {_id:ObjectId(req.body.id)},
                {
                    $push:{
                        new:req.body
                        contractname: req.body.contractname,
                        contracttype: req.body.contracttype,
                        parties: req.body.parties,
                        amount:req.body.amount,
                        startdate:req.body.startdate,
                        enddate:req.body.enddate 
                    }
                },
            function(err,data){
                console.log(data)
                res.send(data)
            }
        )
            
        })
    }) */

    a.get('/par_view/:id',(req,res)=>{

        MongoClient.connect(url,(err,conn)=>{
    
            var dbo=conn.db('contractmanage')
    
            dbo.collection('contract').findOne({_id:ObjectId(req.params.id)},(err,data)=>{
    
                res.send(data)
    
            })
    
        })
    
    })

   /*  a.get('/view/:id',(req,res)=>{

        MongoClient.connect(url,(err,conn)=>{
            var hex = /[0-9A-Fa-f]{6}/g;
            id = (hex.test(_id))? ObjectId(_id) : id;
            var dbo=conn.db('contractmanage')
            dbo.collection.findOne({'_id':new ObjectID(id)}, function(error,doc) {
              if (error) {
                callback(error);
              } else {
                callback(null, doc);
              }
            }); */
           
    
     /*         dbo.collection('contract').findOne({_id:ObjectId(req.params.id)},(err,data)=>{
    
                res.send(data) 
    
            })
    
        }) 
    
    })*/


   
    a.listen(9000,function(){
        console.log("listening in 9000")
    })