const router = require('express').Router();
const suppliesCtrl = require('../controllers/supplies')

// Public Routes
router.get('/', suppliesCtrl.index);


// Protected Routes
router.use(require('../config/auth'));
// router.post('/', checkAuth, suppliesCtrl.create);
// router.delete('/:id', checkAuth, suppliesCtrl.delete);
// router.put('/:id', checkAuth, suppliesCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;