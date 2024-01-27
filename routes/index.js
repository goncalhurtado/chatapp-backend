const router = require("express").Router();
const { getAllUsers, registerUser } = require("../controllers/userController");
const {
  getConversation,
  newConversation,
} = require("../controllers/conversationController");

router.get("/users", getAllUsers);
router.post("/user", registerUser);

// conversation

router.get("/conversations/:userId", getConversation);
router.post("/conversation", newConversation);

module.exports = router;
