export default (err, req, res, next) => {
 err.statusCode=err.statusCode|| 500;
err.status=err.status||'error';

const devError=(error,res)=>{
    res.status(error.statusCode).json({
        status:error.status,
        statusCode:error.statusCode,
        message:error.message,
        stack:error.stack
    })
}

const proError=(error,res)=>{
    if(error.isOperational){
        res.status(error.statusCode).json({
            status:error.status,
            statusCode:error.statusCode,
            message:error.message
        })

    }
    else{
        res.status(500).json({
            status:'error',
            statusCode:500,
            message:'Something went wrong'
        })
    }
}
 
if(process.env.NODE==='development'){
    devError(err,res)
}
else{
    proError(err,res)
}
 
}