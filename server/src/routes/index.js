const { Router } = require('express');
const router = Router()

// Import Controllers
const LoginRegisterControl = require('../controllers/loginRegisterControl')
const SalesRegisterControl = require('../controllers/salesRegisterControl')
const TrakingRegisterControl = require('../controllers/trakingControl')


// Routes
router.use('/api/register', LoginRegisterControl.registerRouter );
router.use('/api/login', LoginRegisterControl.loginRouter );
router.use('/api/new/sales', SalesRegisterControl.salesRouter );
router.use('/api/traking', TrakingRegisterControl.trakingRouter );


module.exports = router