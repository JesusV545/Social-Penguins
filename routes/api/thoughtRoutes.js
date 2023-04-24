const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router.get('/', getAllThoughts);

router.post('/:userId', addThought);

router.route('/:thoughtId') 
    .get(getThoughtById)
    .put(addThought)
    .delete(removeThought);

router.route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction);

module.exports = router;
