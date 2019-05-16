import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL || 'http://localhost:4000/graphql',
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
})

// establishes socket connection
import './socket'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('app')
)
