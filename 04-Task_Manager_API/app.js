import express from "express";
import { router } from "./routers/tasks.routers.js";

const app = express();
const PORT = 3000;
const tasks = router;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.status(200).send(`<h1>Task Manager App</h1>`);
});

app.use("/api/v1/tasks", tasks);

app.all("*", (req, res) => {
  res.status(404).send(`<h1>🚫 Page Invalid!!</h1>`);
});

app.listen(PORT, console.log(`🌐 server is listening on port ${PORT}...`));
