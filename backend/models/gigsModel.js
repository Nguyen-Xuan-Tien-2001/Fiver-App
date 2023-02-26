import mongoose from "mongoose";

const gigSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    title:{
        type: String,
        require: true,
    },
    categoryone:{
        type: String,
        require: true,
    },
    categorytwo:{
        type: String,
        require: true,
    },
    servicetype:{
        type: String,
        require: true,
    },
    matadata:{
        type: String,
        require: true,
    },
    searchtag:[{
        type: String,
        require: true,
    }],
    pkgname:[{
        name: {type:String,
            require: true},
    }],
    pkgdiscription:[{
        discription: {type:String,
            require: true},
    }],
    deliverytime:[{
        days: {type:String,
            require: true},
    }],
    numofpages:[{
        pagesnum: {type:String,
            require: true},
    }],
    numofproducts:[{
        productsnum: {type:String,
            require: true},
    }],
    customization:[{
        name: {type:Boolean,
            require: true},
    }],
    responsivedesign:[{
        pagesnum: {type:Boolean,
            require: true},
    }],
    contentupload:[{
        name: {type:String,
            require: true},
    }],
    revisions:[{
        name: {type:String,
            require: true},
    }],
    price:[{
        name: {type:Number, 
            require: true},
    }],
    image:{
        type: String,
        require: true,
    },
})


const Gig = mongoose.model('Gig',gigSchema);
export default Gig;