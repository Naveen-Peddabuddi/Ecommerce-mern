const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://Alok08:8308303270@cluster0.pmkry.mongodb.net/E-commerce-react?retryWrites=true&w=majority");
};
