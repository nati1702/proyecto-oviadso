require("dotenv").config();

const { sendEmail } = require("./services/emailService");
const { getTemplate } = require("./services/templateService");

const prueba = async () => {

    const template = getTemplate(
        "confirmEmail",
        {
            "@name": "Natalia Reyes Pancha",
            "@nombreEmpresa": "OVIADSO",
            "@link": "http://localhost:3001",
            "@nameBtn": "Confirmar cuenta"
        }
    );

    await sendEmail(
        process.env.SMTP_USER,
        template.subject,
        "Correo de confirmación",
        template.html
    );

    console.log("Correo enviado correctamente");

};

prueba();