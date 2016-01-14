export function selectBook(book) {
  console.log('Action triggered:', book)
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type of property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}