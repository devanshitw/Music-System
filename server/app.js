const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv/config");

const { default: mongoose } = require("mongoose");

// Enable CORS middleware
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
    return res.json("Holla");
});

const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

const artistsRoutes = require("./routes/artist");
app.use("/api/artists/", artistsRoutes);

const albumRoutes = require("./routes/albums");
app.use("/api/albums", albumRoutes);

const songRoutes = require("./routes/songs");
app.use("/api/songs/", songRoutes);

// Connect to MongoDB
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
    .once("open", () => console.log("Connected to MongoDB"))
    .on("error", (error) => {
        console.log(`MongoDB connection error: ${error}`);
    });

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
