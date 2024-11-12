import express from "express";
import { controlFlowRouter } from "./routes/controlFlow.js";
import { dataFlowRouter } from "./routes/dataFlow.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json())
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(controlFlowRouter)
app.use(dataFlowRouter)

app.listen(PORT, () => {
  console.log(`server running on: localhost:${PORT}`);
});
