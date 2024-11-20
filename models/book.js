const mongoose = require("mongoose")
const coverImagePath = "uploads/booksCover"

const bookSchema = new mongoose.Schema({
    title :{ type:String, required: true}
},{
    description :{ type:String, required: true}
},{
    publishedDate :{ type: Date, required: true}
},{
    pageCount :{ type: Number, required: true}
},{
    createAt :{ type: Date, required: true, default: Date.now}
},{
    coverImage :{ type:String, required: true}
},{
    author :{ type:mongoose.Schema.ObjectId, required: true, ref : "Author"}
});

module.exports = mongoose.model("book",bookSchema)
module.exports.coverImagePath = coverImagePath