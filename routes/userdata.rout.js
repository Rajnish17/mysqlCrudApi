const express =require("express");
const router =express.Router();
const{insertintodb,selectAllData,updateData,deleteData} =require("../db");

router.post("/",function(req,res){
    insertintodb(req.body).then(data=>{
        console.log(data);
        res.json({
            meassage:"success"
        })
    }).catch(err=>{
        console.log(err);
        res.json({
            meassage:"error"
        })
    })
});
router.get("/data",function(req,res){
    selectAllData().then(result=>{
        res.json({
            message:"Success",
            data:result
        })
    }).catch(err=>{
        res.send(err);
    })
});
//update on the basis of id
router.put("/update",function(req,res){
    updateData(req.body).then(result=>{
        res.json({
            message:"Successfully Updated",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
});
//delete on the basis of id
router.delete("/delete",function(req,res){
    deleteData(req.body).then(result=>{
        res.json({
            message:"SuccessFully deleted",
            result
        })  
    
    }).catch(err=>{
            console.log(err)
            res.send(err);
        })
    })

module.exports=router;