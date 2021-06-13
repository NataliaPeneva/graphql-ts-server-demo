export interface ServerConfig {
  url: string
}

export interface Book {
  id: string
  title: string
  author: string
}

export type Books = Book[]
