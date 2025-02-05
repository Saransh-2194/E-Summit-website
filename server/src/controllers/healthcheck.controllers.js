import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req, res) => {
    const response = new APIResponse(200, "OK", "Health check passed");
    res.status(response.statusCode).json(response);
});

export {healthCheck};