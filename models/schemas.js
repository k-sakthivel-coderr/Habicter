// requiring mongoose
const mongoose=require("mongoose")
// Schema to define fields of storing data into DB
const InputSchema=new mongoose.Schema({
    HabitName:{
        type:String,
        required:true,
        unique:true
    },
    Days:{
        type:Number,
        required:true,
    },
    DaysCount:{
        type:Number,
        default:0
    }
},{
    timestamps: true
})

// initialize our schema
const Input = mongoose.model('Input', InputSchema);
// exporting schema and make available
module.exports = Input;