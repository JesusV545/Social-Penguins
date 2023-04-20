const { Thought, User, Types } = require('../models');

const ThoughtController = {
    getAllThoughts: async (req, res) => {
        try {
            const dbThoughtData = await Thought.find({})
                .select("-__v")
                .sort({ _id: -1 });
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    getThoughtById: async ({ params }, res) => {
        console.log("params sent", params);
        try {
            const dbThoughtData = await Thought.findOne({ _id: params.thoughtId })
                .select("-__v");
            if (!dbThoughtData) {
                res.status(404).json({ message: "No thought found with this id!" });
                return;
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    addThought: async ({ params, body }, res) => {
        console.log("INCOMING BODY", body);
        try {
            const { _id } = await Thought.create(body);
            const dbUserData = await User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
            if (!dbUserData) {
                res.status(404).json({ message: 'No User found with this id! first error' });
                return;
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    removeThought: async ({ params }, res) => {
        try {
            const deletedthought = await Thought.findOneAndDelete({ _id: params.thoughtId });
            if (!deletedthought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            const dbUserData = await User.findOneAndUpdate(
                { _id: params.username },
                { $pull: { thoughts: params.thoughtId } },
                { new: true }
            );
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    },

    addReaction: async ({ params, body }, res) => {
        console.log("INCOMING BODY", body);
        try {
            const dbUserData = await Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $push: { reactions: body } },
                { new: true }
            );
            if (!dbUserData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    },

    removeReaction: async ({ params }, res) => {
        try {
            const dbUserData = await Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $pull: { reactions: { reactionId: params.reactionId } } },
                { new: true }
            );
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    }
};

module.exports = ThoughtController;
