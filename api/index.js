import express from "express";
import postRoute from "./routes/postsRoute.js";
import authRoute from "./routes/authRoute.js";
import usersRoute from "./routes/usersRoute.js";

const app = express();

app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

app.listen(8800, () => {
  console.log("Server is starting at port 8800!");
});
