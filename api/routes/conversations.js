const router = require("express").Router();
const Conversation = require("../models/Conversation");

// New Conversation
router.post("/", async (req, res) => {
  console.log("Received conversation");
  if (!req.body.senderId || !req.body.receiverId) {
    return res.status(400).json("senderId or receiverId is missing.");
  }

  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Something went wrong!");
  }
});

// Get Conversation
router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Unfortunately, Something went wrong!");
  }
});

module.exports = router;
