import createError from "../utils/createError.js";
import Message from "../models/message.model.js";
import Conversation from "../models/Conversation.model.js";

export const createMessage = async (req, res, next) => {
  const newMessage = new Message({
    ConversationId: req.body.ConversationId,
    userId: req.userId,
    desc: req.body.desc,
  });

  try {
    const savedMessage = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { id: req.body.ConversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );
    res.status(200).send(savedMessage);
  } catch (error) {
    next(createError(500, error.message));
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).send(messages);
  } catch (error) {
    next(createError(500, error.message));
  }
};
