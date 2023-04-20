const mongoose = require('mongoose');

const { Schema } = mongoose;

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => {
        return new Date(timestamp).toISOString();
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        reactionId: {
          type: mongoose.Types.ObjectId,
          default: () => new mongoose.Types.ObjectId(),
        },
        reactionBody: {
          type: String,
          required: true,
          maxLength: 280,
        },
        username: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => {
            return new Date(timestamp).toISOString();
          },
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
