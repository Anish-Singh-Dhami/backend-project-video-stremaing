const asyncHandler = (func) => {
    return (req, res, next) => {
        Promise.resolve(func(req, res, next)).catch((error)=>{
            next(error);
        })
    }
}


// using Try Catch 
/* 
const asyncHandler = (func) => {
    return (
        async (req, res, next) => {
            try {
                await func(req, res, next);           
            } catch (error) {
                res.status(error.code || 500).json({
                    success : false,
                    message : error.message
                })
            }
        }
    )
}
 */
export default asyncHandler;x