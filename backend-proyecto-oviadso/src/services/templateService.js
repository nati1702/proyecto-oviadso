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
        fs.readFileSync(jsonPath, "utf8")
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

    // Reemplazar únicamente las variables enviadas
    Object.keys(variables).forEach((key) => {
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