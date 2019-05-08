const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('../db')
const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 8080
const app = express()
const socketio = require('socket.io')
const cors = require('cors')
const schema = require('./schema')

module.exports = app

// eslint-disable-next-line camelcase
const express_graphql = require('express-graphql')

app.use(cors())

const createApp = () => {
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.use(compression())

  // session middleware with passport
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'my best friend is Cody',
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  // auth and api routes
  // app.use('/auth', require('./auth'))
  // app.use('/api', require('./api'))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

app.use(
  '/graphql',
  express_graphql({
    schema: schema,
    // root: resolvers,
    graphiql: true
  })
)
app.listen(4000, () =>
  console.log('Express GraphQL Server Now Running On localhost:4000/graphql')
)

app.get('/questions', (req, res, next) => {
  const questions = [
    {
      id: 1,
      question: 'What meal are you cooking today?',
      image: [
        'https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg',
        'https://www.edamam.com/web-img/3ac/3acd6032cb158df30d138fb7af44309d.jpg',
        'https://www.edamam.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg'
      ],
      name: ['breakfast', 'lunch', 'dinner']
    },
    {
      id: 2,
      question: 'What dairy do you want to use today?',
      image: [
        'https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg',
        'https://www.edamam.com/web-img/3ac/3acd6032cb158df30d138fb7af44309d.jpg',
        'https://www.edamam.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg',
        'https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg',
        'https://www.edamam.com/web-img/3ac/3acd6032cb158df30d138fb7af44309d.jpg',
        'https://www.edamam.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg'
      ],
      name: ['Milk', 'Eggs', 'Cheese', 'Cream', 'Butter', 'Sour Cream']
    },
    {
      id: 3,
      question: 'What meat(s) do you want to use today?',
      image: [
        'https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg',
        'https://www.edamam.com/web-img/3ac/3acd6032cb158df30d138fb7af44309d.jpg',
        'https://www.edamam.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg',
        'https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg',
        'https://www.edamam.com/web-img/3ac/3acd6032cb158df30d138fb7af44309d.jpg',
        'https://www.edamam.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg'
      ],
      name: ['Beef', 'Chicken', 'Pork', 'Turkey', 'Steak', 'Ham']
    },
    {
      id: 4,
      question: 'What veggies do you want to use today?',
      image: [
        'https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg',
        'https://www.edamam.com/web-img/3ac/3acd6032cb158df30d138fb7af44309d.jpg',
        'https://www.edamam.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg',
        'https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg',
        'https://www.edamam.com/web-img/3ac/3acd6032cb158df30d138fb7af44309d.jpg',
        'https://www.edamam.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg'
      ],
      name: [
        'Onions',
        'Tomatoes',
        'Garlic',
        'Peppers',
        'Cucumber',
        'Butternut Squash'
      ]
    },
    {
      id: 5,
      question: 'What grains do you want to use today? ',
      image: [
        'https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg',
        'https://www.edamam.com/web-img/3ac/3acd6032cb158df30d138fb7af44309d.jpg',
        'https://www.edamam.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg',
        'https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg',
        'https://www.edamam.com/web-img/3ac/3acd6032cb158df30d138fb7af44309d.jpg',
        'https://www.edamam.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg'
      ],
      name: ['Bread', 'Rolls', 'White Rice', 'Brown Rice', 'Quinoa', 'Farro']
    }
  ]
  res.send(questions)
})
// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}

/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
if (process.env.NODE_ENV !== 'production') require('../../secrets')

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )

  // set up our socket control center
  const io = socketio(server)
  require('./socket')(io)
}

const syncDb = () => db.sync()

async function bootApp() {
  await sessionStore.sync()
  await syncDb()
  await createApp()
  await startListening()
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp()
} else {
  createApp()
}
