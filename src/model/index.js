const uuid = require('uuid/v4')

const todos = [
  {
    id: 1,
    title: 'Finish stand-up website',
    description: 'Website for daily task management',
    subtasks: [
      {
        id: 2,
        title: 'Build edit page',
      },
      {
        id: 3,
        title: 'Get API working',
      },
    ],
  },
]

const getAllTodos = () => todos

const getOneTodo = (id) => {
  const item = todos.filter(todo => todo.id === id)

  if (!item) return { error: { status: 404, message: 'Not found' }}

  return item
}

const createTodo = (body) => {
  const id = uuid()
  const { title, description } = body

  const errors = []

  if (!title) errors.push('Title is required')
  if (!description) errors.push('Description is required')

  if (errors.length) return { status: 400, message: 'There were errors', errors }

  const todo = {
    id,
    title,
    description,
    completed: false,
  }

  todos.push(todo)
  return todo
}

module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
}
