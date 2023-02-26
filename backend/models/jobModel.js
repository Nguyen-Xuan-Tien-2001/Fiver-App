import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    maintitle:{
        type: String,
        require: true,
    },
    category:{
        type: String,
        require: true,
    },
    category2:{
        type: String,
        require: true,
    },
    days:{
        type: String,
        require: true,
    },
    price:{
        type: String,
        require: true,
    },
})


const Job = mongoose.model('Job',jobSchema);
export default Job;