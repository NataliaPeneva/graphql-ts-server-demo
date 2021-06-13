import { books } from './db'
import { Book } from './types'

export const mutations = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addBook(parent: any, book: Book) {
    books.push(book)
    return books.find((b) => b.id === book.id)
  },
}
