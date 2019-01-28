const express = require("express");
const app = express();
const routerDataCPU = require("./routes/route_data_cpu");

app.use(routerDataCPU);

app.get("/", (req, res) => {
    res.send({ "Status": "Server telah aktif" });
});

app.listen(4567, () => {
    console.log("Server berjalan di port 4567!");
});