import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  cache:new InMemoryCache(),
  uri:"https://cunning-beetle-32.hasura.app/v1/graphql",
  headers:{'x-hasura-admin-secret': `${import.meta.env.VITE_HASURA_KEY}`},

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
