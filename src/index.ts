import { ApolloServer } from 'apollo-server'

import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { ServerConfig } from './types'

const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }: ServerConfig) => {
  console.log(`🚀  Server ready at ${url}`)
})
