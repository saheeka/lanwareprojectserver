const mongoose=require('mongoose')

//connect server to db
mongoose.connect('mongodb://localhost:27017/project',{
    useNewUrlParser:true
})

//model creation
const User= mongoose.model('User',{
    uname:String,
    email:String,
    
    password:String,
    phone:Number,

})

const Product=mongoose.model('Product',{
    name:String,
    price:Number,
    desc:String
})
module.exports={
User,
Product
}