const jwt = require("jsonwebtoken");
require("dotenv").config();


const verifyToken = (req,res,next)=>{


    try{


        const header = req.headers.authorization;


        if(!header){

            return res.status(401).json({

                success:false,
                message:"Token requerido"

            });

        }


        const token = header.split(" ")[1];


        if(!token){

            return res.status(401).json({

                success:false,
                message:"Token inválido"

            });

        }



        const decoded = jwt.verify(

            token,

            process.env.JWT_KEY_SECRET

        );



        req.user = decoded;


        next();



    }catch(error){


        return res.status(401).json({

            success:false,
            message:"Token inválido o expirado"

        });


    }


};


module.exports = verifyToken;