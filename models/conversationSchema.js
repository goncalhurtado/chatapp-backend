const moongose = require("mongoose");

const conversationSchema = new moongose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);
//ssdad
const Conversation = moongose.model("Conversation", conversationSchema);
module.exports = Conversation;
