const express = require("express");
const router = express.Router();


const verifyToken = require("../middlewares/verifyToken");


const {
getAllOvines
}=require("../controllers/ovineController");



router.get(
"/ovines",
verifyToken,
getAllOvines
);



module.exports=router;