import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className="col-md-8 text-primary text-center">Select a book to get started.</div>;
    }

    return (
      <div className="bookdetail col-md-8 bg-success text-white">
        <h3>Details for :</h3>
        <div>Title : {this.props.book.title}</div>
        <div>Pages : {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
