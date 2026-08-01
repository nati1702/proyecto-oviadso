const userModel = require("../models/userModel");



// ==========================================
// VALIDAR LOGIN
// ==========================================

const loginService = async (email, password) => {

    try {

        const user = await userModel.findOne({

            where:{
                email: email
            }

        });


        if(!user){

            return null;

        }


        // Validación simple de contraseña
        // (Luego podemos agregar bcrypt)

        if(user.password !== password){

            return null;

        }


        return user;


    } catch(error){

        console.log(error);

        throw error;

    }

};



module.exports = {

    loginService

};