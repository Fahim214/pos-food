const mongoose = require("mongoose");

const connctDatabase = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/pos-food", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database Is Connected");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connctDatabase