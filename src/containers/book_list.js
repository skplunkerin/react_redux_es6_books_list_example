import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBook } from '../actions/index'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          className="list-group-item" 
          onClick={() => this.props.selectBook(book)} >
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
// We can either prepend exporting on the class declaration (above) like so:
// export default class BookList extrends Component {
// OR at the end, like so:
// export default BookList

function mapStateToProps(state) {
  // whatever is returned here will show up as props
  // inside of BookList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the results should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook }, dispatch)
}

// Promote BookLisat from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
