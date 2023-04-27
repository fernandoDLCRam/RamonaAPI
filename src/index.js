const express = require("express");
const cors = require("cors");
const votoRouter = require("./routes/votos");
const itinerarioRouter = require("./routes/itinerario");

//CONFIG
const app = express();
const port = 4000;

//MIDDLEWARE
app.use(express.json());
app.use(cors({ credentials: false, origin: "*" }));

//ROUTES
app.use("/voto", votoRouter);
app.use("/itinerario", itinerarioRouter);

app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});