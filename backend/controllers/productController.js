exports.getProducts = (req,res,next)=>{
     res.json(
        {
            sucess:true,
            message:'get production working test'
        }
     )
}

exports.getSingleProduct = (req,res,next)=>{
    res.json(
       {
           sucess:true,
           message:'get Single Product working test'
       }
    )
}