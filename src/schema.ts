import { gql } from 'apollo-server'

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Book" type defines the queryable fields for every book in our data source.
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    books: [Book]
    book(id: String): Book
  }

  type Mutation {
    addBook(id: String, title: String, author: String): Book
  }

  type Book {
    id: String!
    title: String!
    author: String!
    category: Categories
  }

  enum Categories {
    scifi
    history
    fantasy
  }
`
