import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import App from './app'
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

const client = new ApolloClient({
  uri: '/api/graphql',
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
)
