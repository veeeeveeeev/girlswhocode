import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import postRoutes from "./routes/posts.js";
import { createPost } from "./controllers/posts.js";
import Post from "./models/Post.js";

// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// FILE STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

//ROUTES
app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.post("/posts", upload.single("picture"), createPost);
app.use("/posts", postRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
