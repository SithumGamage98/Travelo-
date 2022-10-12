const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

//Import Routes
/*const PackageRoutes=require('./routes/packages');
const FeedBackRoutes=require('./routes/feedbacks'); */

app.use(cors());
app.use(bodyParser.json());
//app.use(PackageRoutes);
//app.use(FeedBackRoutes);

const URL=process.env.MONGODB_URL;

mongoose.connect(URL, {

    //useCreateIndex : true,
    useNewUrlParser : true,
    //useUnifiedTopologyL:true,
    //useFindAndModify : false

}); 


const connection = mongoose.connection;
connection.once('open',() => {
 console.log("Mongodb connection success!");

}) 

const packageRouter = require("./routes/packages.js");
const FeedBackRouter = require("./routes/feedbacks.js");
const cusPackRouter = require("./routes/cusPacks.js");
app.use("/package",packageRouter); 
app.use("/feedback",FeedBackRouter); 
app.use("/cusPack",cusPackRouter); 


app.listen(PORT, () => {

    console.log(`Server is up and running on port number: ${PORT}`)

}) 