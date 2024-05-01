var routes = require('express').Routes()
const inventory = require('../controllers/inventory.js')

router.post('/newItem', inventoryCtrl.create)

module.exports = router 