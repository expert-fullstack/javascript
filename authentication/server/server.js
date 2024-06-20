import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from 'cors'
import http from 'http';

// file imports
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import routes from "./routes/index.js";
import webhookRoutes from './routes/webhookRoutes.js';
import { initSocketIO } from './helpers/socketHelper.js'; 


const port = process.env.PORT || 5000;
connectDB();

const app = express();
const server = http.createServer(app);
initSocketIO(server);

app.use("/webhook", webhookRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Enable CORS for all routes
app.use(cors());



app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

server.listen(port, () => console.log(`Server started on port ${port}`));
