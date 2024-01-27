const moongose = require("mongoose");

const MessageSchema = new moongose.Schema(
  {
    conversationId: {
      type: moongose.Schema.Types.ObjectId,
      ref: "Conversation",
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = moongose.model("Message", MessageSchema);
