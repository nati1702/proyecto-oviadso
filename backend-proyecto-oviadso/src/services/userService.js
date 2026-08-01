const userModel = require("../models/userModel");


// ==========================================
// OBTENER TODOS LOS USUARIOS
// ==========================================

const allUsers = async () => {

    try {

        return await userModel.findAll();

    } catch (error) {

        console.error(error);
        throw error;

    }

};




// ==========================================
// OBTENER USUARIO POR ID
// ==========================================

const getUserByIdService = async (id) => {

    try {

        return await userModel.findOne({

            where:{
                id
            }

        });


    } catch(error){

        console.error(error);
        throw error;

    }

};





// ==========================================
// CREAR USUARIO
// ==========================================

const createUserService = async(data)=>{

    try{

        return await userModel.create(data);


    }catch(error){

        console.error(error);
        throw error;

    }

};






// ==========================================
// ACTUALIZAR USUARIO
// ==========================================

const updateUserService = async(id,data)=>{

    try{


        await userModel.update(

            data,

            {
                where:{
                    id
                }
            }

        );


        return await userModel.findOne({

            where:{
                id
            }

        });



    }catch(error){

        console.error(error);
        throw error;

    }

};






// ==========================================
// ELIMINAR USUARIO (INACTIVAR)
// ==========================================

const deleteUserService = async(id)=>{


    try{


        return await userModel.update(

            {

                active:0

            },

            {

                where:{
                    id
                }

            }

        );


    }catch(error){


        console.error(error);
        throw error;


    }


};







// ==========================================
// CONFIRMAR CORREO
// ==========================================

const confirmEmailService = async(id)=>{


    try{


        await userModel.update(

            {

                verifyEmail:true

            },

            {

                where:{
                    id
                }

            }

        );



        return await userModel.findOne({

            where:{
                id
            }

        });



    }catch(error){


        console.error(error);
        throw error;


    }


};






module.exports={

    allUsers,
    getUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService,
    confirmEmailService

};