const express = require('express')
const ctrl = require('../controller')

const router = express.Router()

router.get('/', ctrl.getAllTodos)
router.get('/:id', ctrl.getOneTodo)
router.post('/', ctrl.createTodo)

module.exports = router
