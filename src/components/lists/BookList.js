import React from "react";
import { Link } from "react-router-dom";
import Book from "../representational/Book";
import withRouter from "../representational/WithRouters";


const BookList = (props) => {
    return (
        props.books.map((book, index) => {
            return (
                <Link to={"/" + book.id} key={book.id}>
                    <Book name={book.bookName} writer={book.writer}
                        selectedBookHandler={() =>
                            props.selectedBookHandler(book.id)} />
                </Link >
            )
        })
    )
}

export default withRouter(BookList);