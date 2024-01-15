const express = require("express");
const router = express.Router();

const {
    createUser,
    loginUserCtrl,
    getallUser,  
     
    
  } = require("../controller/userCtrl");
  const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-user", getallUser);




module.exports = router