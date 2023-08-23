const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const router = require("./routers/router");

app.use(router);

const port = 3003;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
