const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(require("cors")());

const authRoutes = require("./routes/auth");
const opportunitiesRoutes = require("./routes/opportunities");

app.use("/auth", authRoutes);
app.use("/opportunities", opportunitiesRoutes);

app.listen(3000, () => console.log("Backend running on :3000"));
