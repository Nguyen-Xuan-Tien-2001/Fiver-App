import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    image:{
        type: String,
        require: true,
    },
    balance:{
        type: String,
    },
    skillCategory:{
        type: String,
        require: true,
    },
    skill:{
        type: String,
        require: true,
    },
})


const Profile = mongoose.model('Profile',profileSchema);
export default Profile;