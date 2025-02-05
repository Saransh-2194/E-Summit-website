import {app} from './app.js';
import dotenv from "dotenv";
import connectDB from './db/index.js';
dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 4000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch(error => console.error(`Connection Error: ${error.message}`));