import jwt from 'jsonwebtoken'

export async function AuthUser(req,res,next) {
    const token = req.cookie.token

    if(!token){
        return res.status(400).json({
            message:"Unouthorized ",
            success:false,
            err:"no token provided "
        })
    }
    let  decoded =null
    try{
        decoded=await jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
    }catch(err){
        return res.status(401).json({
            message:"Unauthorized"
            success:false,
            err:"invalid token"
        })
    }
}