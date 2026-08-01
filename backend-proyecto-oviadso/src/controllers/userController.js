const {


    allUsers,
    getUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService,
    confirmEmailService


} = require("../services/userService");



const { sendEmail } = require("../services/emailService");

const { getTemplate } = require("../services/templateService");

const { Response } = require("../functions/response");






// ==========================================
// OBTENER TODOS
// ==========================================


const getAllUsers = async(req,res)=>{


    try{


        const users = await allUsers();



        return res.status(200).json(

            new Response(

                true,

                "Usuarios obtenidos exitosamente",

                users,

                null

            ).json

        );



    }catch(error){


        return res.status(500).json(

            new Response(

                false,

                "Error al obtener usuarios",

                null,

                error.message

            ).json

        );


    }


};









// ==========================================
// OBTENER POR ID
// ==========================================


const getUserById = async(req,res)=>{


    try{


        const {id}=req.params;



        const user = await getUserByIdService(id);




        if(!user){


            return res.status(404).json(

                new Response(

                    false,

                    "Usuario no encontrado",

                    null,

                    null

                ).json

            );


        }




        return res.status(200).json(

            new Response(

                true,

                "Usuario encontrado",

                user,

                null

            ).json

        );




    }catch(error){


        return res.status(500).json(

            new Response(

                false,

                "Error al buscar usuario",

                null,

                error.message

            ).json

        );


    }


};









// ==========================================
// CREAR USUARIO
// ==========================================


const createUser = async(req,res)=>{


    try{


        const user = await createUserService(req.body);




     const template = getTemplate(
    "confirmEmail",
    {
        "@name": "Natalia Reyes Pancha",
        "@nombreEmpresa": "OVIADSO",
        "@link": "http://localhost:3001",
        "@nameBtn": "Confirmar cuenta"
    }
);

console.log(template.html);


// Verificar plantilla antes de enviar
console.log(template.html);



        await sendEmail(


            user.email,


            template.subject,


            "Confirmación de correo",


            template.html


        );







        return res.status(201).json(


            new Response(

                true,

                "Usuario creado correctamente y correo enviado",

                user,

                null


            ).json


        );




    }catch(error){



        console.log(error);



        return res.status(500).json(


            new Response(

                false,

                "Error al crear usuario",

                null,

                error.message


            ).json


        );


    }


};









// ==========================================
// ACTUALIZAR
// ==========================================


const updateUser = async(req,res)=>{


    try{


        const {id}=req.params;



        const user = await updateUserService(

            id,

            req.body

        );




        return res.status(200).json(

            new Response(

                true,

                "Usuario actualizado correctamente",

                user,

                null


            ).json

        );




    }catch(error){


        return res.status(500).json(

            new Response(

                false,

                "Error al actualizar usuario",

                null,

                error.message

            ).json

        );


    }


};








// ==========================================
// ELIMINAR
// ==========================================


const deleteUser = async(req,res)=>{


    try{


        const {id}=req.params;



        await deleteUserService(id);




        return res.status(200).json(

            new Response(

                true,

                "Usuario eliminado correctamente",

                null,

                null

            ).json

        );




    }catch(error){



        return res.status(500).json(

            new Response(

                false,

                "Error al eliminar usuario",

                null,

                error.message

            ).json


        );


    }


};









// ==========================================
// CONFIRMAR CORREO
// ==========================================


const confirmEmail = async(req,res)=>{


    try{


        const {id}=req.params;



        const user = await confirmEmailService(id);




        return res.status(200).json(

            new Response(

                true,

                "Correo confirmado correctamente",

                user,

                null


            ).json


        );




    }catch(error){



        return res.status(500).json(

            new Response(

                false,

                "Error al confirmar correo",

                null,

                error.message


            ).json


        );


    }


};








module.exports={


    getAllUsers,

    getUserById,

    createUser,

    updateUser,

    deleteUser,

    confirmEmail


};