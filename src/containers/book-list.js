import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// return oject and it will become this.props
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}


//export the containers, it takes func and Component

//if state ever change, this container will automaticlly re-render
//whenever the app state changes, the object in the state function will be assign to props

// Promote BookList from a Component to a container, it needs to know about this new dispatch method, selectBook. Make it availablt as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
