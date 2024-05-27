import asyncHandler from "../utils/asyncHandler.js";

// register the user, handle the async task with asyncHandler
const registerUser = asyncHandler(async (req, res) => {
    // Dummy Logic
    res.status(200).json({
        message: "Hello, World!!"
    })
})

export default registerUser;