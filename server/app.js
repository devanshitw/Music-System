const express = require("express");
const cors = require("cors"); // Move this line above app.use(cors()) and app.use(cors({origin:true}));
const app = express();
require("dotenv/config");

const { default: mongoose } = require("mongoose");

app.use(cors()); // This line should come after the cors import
app.use(cors({ origin: true })); // This line should come after the cors import
app.use(express.json());

app.get("/", (req, res) => {
    return res.json("Holla");
});

const userRoute=require("./routes/auth");
app.use("/api/users/",userRoute);

const artistsRoutes=require("./routes/artist");
app.use("/api/artists/",artistsRoutes);

const albumRoutes=require("./routes/albums");
app.use("/api/albums",albumRoutes);

const songRoutes=require("./routes/songs");
app.use("/api/songs/",songRoutes);

mongoose.connect(process.env.DB_STRING,{useNewUrlParser:true});
mongoose.connection
.once("open",()=>console.log("Connected"))
.on("error",(error)=>{
    console.log('ERROR:${error}');
});

app.listen(4000, () => console.log("Listening"));
