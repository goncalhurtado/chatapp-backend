const Message = require("../models/messageSchema");

const postMessage = async (req, res) => {
  try {
    const { conversationId, sender, text } = req.body;
    const newMessage = new Message({
      conversationId,
      sender,
      text,
    });
    if (!conversationId || !sender || !text) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await newMessage.save();
    res.status(201).json({ message: "Message created" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getMessages = async (req, res) => {
  const { conversationId } = req.params;
  try {
    if (!conversationId) {
      return res.status(400).json({ message: "ConversationId is required" });
    }
    const messages = await Message.find({ conversationId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { postMessage, getMessages };
