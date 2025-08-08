const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'category'
  },
  serviceName : {
    type:String,

  },
  type : {
    type:String,
    enum: ['Normal','VIP']
  },
  price : {
    type :String,

  }
});

const Service = mongoose.model("service", serviceSchema);
module.exports = Service;
