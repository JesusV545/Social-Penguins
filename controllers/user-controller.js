const { User, Thought } = require('../models')

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const dbUserData = await User.find({})
        .populate({
          path: 'thoughts',
          select: ('-__v')
        })
        .select('-__v')
      res.json(dbUserData)
    } catch (err) {
      console.log(err);
      res.status(400).json(err)
    }
  },
  getUserById: async ({ params }, res) => {
    try {
      const dbUserData = await User.findOne({ _id: params.userId })
        .populate({
          path: "thoughts",
          select: "-__v",
        })
        .select("-__v")
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  createUser: async ({ body }, res) => {
    try {
      const dbUserData = await User.create(body)
      res.json(dbUserData)
    } catch (err) {
      console.log(err)
      res.status(400).json(err)
    }
  },
  updateUser: async ({ params, body }, res) => {
    try {
      const dbUserData = await User.findOneAndUpdate({ _id: params.userId }, body, {
        new: true,
        runValidators: true,
      })
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  deleteUser: async ({ params }, res) => {
    try {
      const dbUserData = await User.findOneAndDelete({ _id: params.userId })
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      await User.updateMany(
        { _id: { $in: dbUserData.friends } },
        { $pull: { friends: params.userId } }
      )
      await Thought.deleteMany({ username: dbUserData.username })
      res.json({ message: "Successfully deleted user" });
    } catch (err) {
      res.status(400).json(err);
    }
  },
  addFriend: async ({ params }, res) => {
    try {
      const dbUserData = await User.findByIdAndUpdate(
        params.userId,
        { $addToSet: { friends: params.friendUserId } },
        { new: true }
      )
        .select("-__v")
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  removeFriend: async ({ params }, res) => {
    try {
      const dbUserData = await User.findByIdAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true, runValidators: true }
      )
        .select("-__v")
      if (!dbUserData) {
        res.status(404).json({ message: "No friend found with this id!" });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    };
  }
};

module.exports = userController;