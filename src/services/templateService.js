const fs = require("fs");
const path = require("path");


const getTemplate = (templateName, variables = {}) => {


    const jsonPath = path.join(
        process.cwd(),
        "public",
        "templates",
        `${templateName}.json`
    );


    const json = JSON.parse(

        fs.readFileSync(
            jsonPath,
            "utf8"
        )

    );



    const htmlPath = path.join(

        process.cwd(),

        "public",

        "templates",

        json.html

    );



    let html = fs.readFileSync(

        htmlPath,

        "utf8"

    );



    // Primero reemplaza los valores del JSON

    for(const key in json.params){


        html = html.replaceAll(

            key,

            json.params[key]

        );


    }



   // Luego reemplaza los valores enviados
Object.keys(variables)
    .sort((a, b) => b.length - a.length)
    .forEach((key) => {
        html = html.replaceAll(key, variables[key]);
    });



    return {

        subject: json.subject,

        html

    };


};



module.exports = {

    getTemplate

};