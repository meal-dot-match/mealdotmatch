const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./db')
const sessionStore = new SequelizeStore({db})
const PORT = process.env.PORT || 8080
const app = express()
const socketio = require('socket.io')
module.exports = app

const express_graphql = require('express-graphql')
const {buildSchema} = require('graphql')

const {GraphQLServer} = require('graphql-yoga')
const fetch = require('node-fetch')

const {edamamApi} = require('../secrets')

//GraphQL Schema
const schema = buildSchema(`
  type Query{
    recipes: [Recipe]
  }

  type Recipe{
    id: Int
    label: String
    img: String
    url: String
    ingredientLines: String
    ingredients: [String]
  }
`)

// const getCourse = args => {
//   let id = args.id
//   return coursesData.filter(course => {
//     return course.id === id
//   })[0]
// }

// Root Resolver - every time the client makes a Query, we dispatch the function corresponding with the Query type.

const baseURL = `https://api.edamam.com/search?app_id=${edamamApi.id}&app_key=${
  edamamApi.key
}`

const resolvers = {
  Query: {
    recipes: async () => {
      const res = await fetch(`${baseURL}?q=dishType=dinner`)
      console.log(res.json())
    }
    // user: (parent, args) => {
    //   const {id} = args
    //   return fetch(`${baseURL}/users/${id}`).then(res => res.json())
    // },
    // posts: () => {
    //   return fetch(`${baseURL}/posts`).then(res => res.json())
    // },
    // post: (parent, args) => {
    //   const {id} = args
    //   return fetch(`${baseURL}/blog/posts/${id}`).then(res => res.json())
    // }
  }
}

// const server = new GraphQLServer({
//   typeDefs: './src/schema.graphql',
//   resolvers
// })

// server.start(() => console.log(`Server is running on http://localhost:4000`))

//Create an express server for graphiQL interface
app.use(
  '/graphql',
  express_graphql({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
)

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
if (process.env.NODE_ENV !== 'production') require('../secrets')

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

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  // compression middleware
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
  app.use('/auth', require('./auth'))
  app.use('/api', require('./api'))

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
