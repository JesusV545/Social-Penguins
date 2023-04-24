const router = require('express').Router();
const{
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');



// Get all users or create a new user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Get, update, or delete a user by ID
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Add or remove a friend for a user by ID
router
    .route("/:userId/friends/:friendUserId")
    .post(addFriend)
    .delete(removeFriend);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = router;
