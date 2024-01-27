const router = require("express").Router();
const { getAllUsers, registerUser } = require("../controllers/userController");

router.get("/users", getAllUsers);
router.post("/register", registerUser);

module.exports = router;
