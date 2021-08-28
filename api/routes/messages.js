const router = require("express").Router();
const Message = require("../models/Message");

// Add Message

router.post("/", async (req, res) => {
  const newMessage = new Message(req.body);
  if (!newMessage) res.status(400).json("Message is missing.");

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    console.log(err);
    res.status(500).json("Unfortunately, Something went wrong!");
  }
});

// Get Messages
router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    console.log(err);
    res.status(500).json("Unfortunately, Something went wrong.");
  }
});

module.exports = router;
