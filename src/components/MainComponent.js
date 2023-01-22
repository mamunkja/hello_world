import React, { Component } from 'react';
import { Navigate, redirect, Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import bookList from '../assets/books';
import BookList from './lists/BookList';
import NewBook from './representational/NewBook';
import BookDetail from "./representational/BookDetail";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            selectedBook: null
        }
    }


    selectedBookHandler = bookId => {
        let book = this.state.books.filter(book =>
            book.id === bookId)[0];

        this.setState({
            selectedBook: book
        });
    }

    render() {
        let books = <BookList books={this.state.books}
            selectedBookHandler={this.selectedBookHandler} />;

        return (
            <div className="App" >
                <nav className='nav-bar'>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" exact={true} element={books} />
                    <Route path="/new-book" exact={true} element={<NewBook />} />
                    <Route path='/:id' element={<BookDetail book={this.state.selectedBook} />} />
                    <Route path='/home' element={<Navigate to="/" />} />
                </Routes>

            </div>
        );
    }

}

export default MainComponent;