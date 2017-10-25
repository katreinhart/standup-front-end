const chai = require('chai')
const app = require('../app')

const { expect } = chai

chai.use(require('chai-http'))

describe('Standup website API', () => {
  describe('POST /todos', () => {
    it('should create a new todo if given valid information', (done) => {
      const todo = {
        title: 'Finish unit 61',
        description: 'Promises checkpoint',
      }
      chai.request(app)
        .post('/todos')
        .send(todo)
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body.data.title).to.equal(todo.title)
          expect(res.body.data.description).to.equal(todo.description)
          done()
        })
    })
  })

  describe('GET /todos', () => {
    it('should retrieve a list of all todos', (done) => {
      chai.request(app) 
        .get('/todos')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          done()
        })
    })
  })

  xdescribe('GET /todos/:id', () => {
    it('should return the individual todo indicated by id', (done) => {
      
    })
  })
})

