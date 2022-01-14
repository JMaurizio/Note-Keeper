const express = require("express");
const apiRoute = require("./routes/api-routes");
const htmlRoute = require("./routes/html-routes");

const PORT = process.env.PORT || 4001;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, () => {
    console.log(`API server is on port http://localhost:${PORT}/`);
});