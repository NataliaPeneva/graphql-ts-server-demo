import { books } from './db'

export const queries = {
  books() {
    return books
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  book(parent: any, { id }: any) {
    return books.find((book) => book.id === id)
  },
}
