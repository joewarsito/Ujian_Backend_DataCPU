const router = require("express").Router();
const os = require("os");
const mongoose = require("mongoose");
const data_cpu = require("../models/data_cpu");

var url = 'mongodb://jojo:1234@localhost:27017/dataCPU';

mongoose.connect(url, { useNewUrlParser: true }, () => {
    console.log("MongoDB berhasil terhubung");
});

router.post("/data", (req, res) => {
    new data_cpu({
        namacpu: os.hostname(),
        tipe: os.type(),
        platform: os.platform(),
        rilis: os.release(),
        ramSisa: os.freemem(),
        ramTotal: os.totalmem()
    }).save().then((x) => {
        console.log(x);
        res.send("Berhasil");
    });
});

router.get("/data", (req, res) => {
    data_cpu.find((err, data) => {
        if (err) {
            throw err;
        }
        else {
            console.log(data);
            res.send(data);
        }
    })
});


module.exports = router;