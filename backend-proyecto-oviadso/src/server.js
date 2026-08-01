const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// ===========================
// CONFIGURACIÓN DE SWAGGER
// ===========================

const swaggerOptions = {
definition: {
openapi: "3.0.0",

    info: {
        title: "API Ovinos",
        version: "1.0.0",
        description: "Documentacion de la API",
    },

    servers: [
        {
            url: "http://localhost:3000",
        },
    ],

    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },

    security: [
        {
            bearerAuth: [],
        },
    ],
},

apis: ["./src/routes/*.js"],


};

// Generar documentación Swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// ===========================
// IMPORTAR RUTAS
// ===========================

const userRoute = require("./routes/userRoute");
const mortalityRoute = require("./routes/mortalityRoute");
const mountingRoute = require("./routes/mountingRoute");
const deliveryRoute = require("./routes/deliveryRoute");
const weightRoute = require("./routes/weightRoute");
const healthRoute = require("./routes/healthRoute");
const ovineRoute = require("./routes/ovineRoute");
const feedingRoute = require("./routes/feedingRoute");
const birthRoute = require("./routes/birthRoute");
const responsiblesRoute = require("./routes/responsiblesRoute");
const authRouter = require("./routes/authRoute");

// ===========================
// CONEXIÓN BASE DE DATOS
// ===========================

const db = require("./config/conectionDB");

// ===========================
// CREAR APLICACIÓN
// ===========================

const app = express();

// Puerto
const PORT = process.env.PORT || 3000;

// ===========================
// CONFIGURACIÓN DE CORS
// ===========================

app.use(
cors({
origin: "http://localhost:3001",
methods: ["GET", "POST", "PUT", "DELETE"],
credentials: true,
})
);

// ===========================
// MIDDLEWARES
// ===========================

app.use(express.json());

app.use(
helmet({
crossOriginResourcePolicy: false,
})
);

app.use(morgan("dev"));

// ===========================
// SWAGGER
// ===========================

app.use(
"/api/docs",
swaggerUi.serve,
swaggerUi.setup(swaggerSpec)
);

// ===========================
// RUTAS
// ===========================

app.use("/api/user", userRoute);
app.use("/api/mortality", mortalityRoute);
app.use("/api/mounting", mountingRoute);
app.use("/api/delivery", deliveryRoute);
app.use("/api/weight", weightRoute);
app.use("/api/health", healthRoute);
app.use("/api/ovine", ovineRoute);
app.use("/api/feeding", feedingRoute);
app.use("/api/birth", birthRoute);
app.use("/api/responsible", responsiblesRoute);
app.use("/api/auth", authRouter);

// ===========================
// RUTA PRINCIPAL
// ===========================

app.get("/", (req, res) => {
res.send("Servidor funcionando");
});

// ===========================
// RUTA 404
// ===========================

app.use((req, res) => {
res.status(404).json({
success: false,
message: "Ruta no encontrada",
route: req.originalUrl,
method: req.method,
});
});

// ===========================
// INICIAR SERVIDOR
// ===========================

const init = async () => {
try {
await db.authenticate();

    console.log("Conexion a DB exitosa");

    app.listen(PORT, () => {
        console.log(`App corriendo en el puerto ${PORT}`);
        console.log(`Swagger en http://localhost:${PORT}/api/docs`);
    });
} catch (error) {
    console.error("Error al conectar con la base de datos:", error);
}

};

init();
