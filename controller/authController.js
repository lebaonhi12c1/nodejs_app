import User from "../model/User.js"
import bcrypt from 'bcrypt'
const authController = {
    //REGISTER
    register: async(req,res)=>{
        try {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(req.body.password,salt)
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
            })
            const user = await newUser.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(err)
        }
    },
    //LOGIN
    login: async(req,res)=>{
        try {
            const user = await User.findOne({username: req.body.username})
            if(!user){
                res.status(404).json("Wrong username !!")
            }
            const validatePassword = await bcrypt.compare(req.body.password,user.password)
            if(!validatePassword){
                res.status(404).json("Wrong password !!")
            }
            if(user && validatePassword){
                res.status(200).json(user)
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}
export default authController