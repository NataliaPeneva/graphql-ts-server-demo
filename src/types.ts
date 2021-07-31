export interface ServerConfig {
  url: string
}

export enum Categories {
  scifi = 'scifi',
  history = 'history',
  fantasy = 'fantasy',
}

export interface Book {
  id: string
  title: string
  author: string
  category?: Categories
}

export type Books = Book[]
