const router = require('express').Router();


router.get('/', (req, res, next) => res.json({ ok: true }));

// USERS

const userRoutes = require('./userRoutes/user.routes');
router.use(userRoutes);

// POSTS

router.get('/posts', postsController.list);
router.post('/posts', postsController.create);

module.exports = router;