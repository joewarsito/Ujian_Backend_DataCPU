const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let dataCPUSchema = new Schema({
    namacpu: String,
    tipe: String,
    platform: String,
    rilis: String,
    ramSisa: Number,
    ramTotal: Number
})

let data_cpu = mongoose.model('data', dataCPUSchema);

module.exports = data_cpu;