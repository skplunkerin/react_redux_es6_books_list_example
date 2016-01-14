// State argument is not application state, only the state
// that this reducer is responsible for
export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      // always return fresh object, like so:
      return action.payload
      // NEVER mutate the state object, like so:
      // state.title = book.title
      // return state
    default:
      return state
  }
}
