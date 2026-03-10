const asyncHandler=(func)=>{
  return async (req,res,next)=>{
try {
   await func(req,res,next);
} catch (error) {
    res.status(err.code ||500).json({
        sucess:false,
        message:err.message
    })
}
    };
};
// const asyncHandler=(fn)=>async ()=>{}

export {asyncHandler}