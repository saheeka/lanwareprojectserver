const jwt = require('jsonwebtoken')


const db = require('./db')
const register = (uname, email,password,phone) => {
    return db.User.findOne({ email }).then(user => {
      console.log(user);
      if (user) {
        return {
          statusCode: 422,
          status: false,
          message: "user already exist ! please login"
        }
      }
      else {
        const newUser = new db.User({
          uname,
          email,
          password,
          phone
        })
        newUser.save()
        return {
          statusCode: 200,
          status: true,
          message: "successfully registered..."
        }
      }
    })
}

const login = (email, password) => {
    return db.User.findOne({ email, password })
      .then(user => {
        if (user) {
         
          return {
            statusCode: 200,
            status: true,
            message: "succesfully logged in..",
            currentUser:user.uname,
            
          }
        }
        else {
          return {
            statusCode: 422,
            status: false,
            message: "invalid user or password"
          }
        }
      })
    }

    const adminlogin = (ademail, password) => {
      return db.User.findOne({ ademail, password })
        .then(user => {
          if (user) {
           
            return {
              statusCode: 200,
              status: true,
              message: "succesfully logged in..",
              currentUser:user.ademail,
              
            }
          }
          else {
            return {
              statusCode: 422,
              status: false,
              message: "invalid user or password"
            }
          }
        })
      }

      const viewuser=()=>{
        return db.User.find({}).then(user=>{
          
          // reminder=user.reminders
         //  console.log(reminder);
         if(user){
           return{
           users:user,
               statusCode: 200,
               status: true,
              
           }
         }
         else{
           return{
             statusCode: 422,
                 status: false,
                 message: "invalid"
           }
         }
        })
      }  
      const viewproduct=()=>{
        return db.Product.find({}).then(product=>{
          
          // reminder=user.reminders
         //  console.log(reminder);
         if(product){
           return{
           products:product,
               statusCode: 200,
               status: true,
              
           }
         }
         else{
           return{
             statusCode: 422,
                 status: false,
                 message: "invalid"
           }
         }
        })
      }  
      const addproduct = (name, price,desc) => {
        return db.Product.findOne({ name }).then(product => {
          console.log(product);
          if (product) {
            return {
              statusCode: 422,
              status: false,
              message: "product already exist..!"
            }
          }
          else {
            const newProduct = new db.Product({
              name,
              price,
              desc
              
            })
            newProduct.save()
            return {
              statusCode: 200,
              status: true,
              message: "successfully added..."
            }
          }
        })
    }
module.exports = {
    register,
    login,
    adminlogin,
    viewuser,
    addproduct,
    viewproduct
}