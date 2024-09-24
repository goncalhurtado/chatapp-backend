const router = require("express").Router();
const {
  getAllUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");
const {
  getConversation,
  newConversation,
} = require("../controllers/conversationController");
const {
  postMessage,
  getMessages,
} = require("../controllers/messageController");

//users

router.post("/user", registerUser);
router.get("/users", getAllUsers);
router.post("/login", loginUser);

// conversation

router.post("/conversation", newConversation);
router.get("/conversations/:userId", getConversation);

// messages
router.post("/message", postMessage);
router.get("/messages/:conversationId", getMessages);

module.exports = router;
