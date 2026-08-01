const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const {
    loginService
} = require("../services/authService");


const {
    Response
} = require("../functions/response");


dotenv.config();



const JWT_KEY_SECRET = process.env.JWT_KEY_SECRET;



// ==========================================
// LOGIN
// ==========================================

const login = async(req,res)=>{


    try{


        const {
            email,
            password
        } = req.body;



        if(!email || !password){


            return res.status(400).json(

                new Response(

                    false,

                    "Debe enviar email y contraseña",

                    null,

                    "Datos incompletos"

                ).json

            );


        }



        const user = await loginService(

            email,

            password

        );



        if(!user){


            return res.status(401).json(

                new Response(

                    false,

                    "Credenciales incorrectas",

                    null,

                    "Usuario o contraseña inválidos"

                ).json

            );


        }




        const token = jwt.sign(

            {

                id:user.id,

                email:user.email,

                role:user.role

            },

            JWT_KEY_SECRET,

            {

                expiresIn:"2h"

            }

        );





        return res.status(200).json(

            new Response(

                true,

                "Login exitoso",

                {

                    user:user,

                    token:token

                },

                null

            ).json

        );




    }catch(error){


        console.log(error);


        return res.status(500).json(

            new Response(

                false,

                "Error en login",

                null,

                error.message

            ).json

        );


    }


};



module.exports={

    login

};