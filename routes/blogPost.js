const express = require("express");
const router = express.Router();

// controller methods
const {create} = require("../controllers/blogPost");

//Post  create post 
router.post("/blogpost", create);


module.exports = router;