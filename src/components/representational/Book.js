import React from "react";
import '../../styles/Book.css';

const Book = props => {
    return (
        <div className="Book" onClick={props.selectedBookHandler}>
            <h3>Name: {props.name} and Writer: {props.writer}</h3>
        </div>
    );
}

export default Book;