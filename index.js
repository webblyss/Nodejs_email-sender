const express  = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const upload = require("express-fileupload");
require("dotenv").config()
const port = 3000;

app.use(bodyParser.json())
app.use(upload())
// IMPORT ROUTES
const homepage = require("./route");

// MIDDLE WARES
app.use(express.static("public"))
app.use("/api",homepage)
 

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})

