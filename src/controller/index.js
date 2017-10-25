const model = require('../model')

const getAllTodos = (req, res, next) => {
  const result = model.getAllTodos()
  res.status(200).json({ data: result })
}

const getOneTodo = (req, res, next) => {
  const result = model.getOneTodo(req.params.id)
  if (result.error) next({ result })
  res.status(200).json({ data: result })
}

const createTodo = (req, res, next) => {
  const result = model.createTodo(req.body)
  if (result.error) next({ result })
  res.status(200).json({ data: result })
}

module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
}
