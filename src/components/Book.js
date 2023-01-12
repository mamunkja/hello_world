import React from "react";
import '../styles/Book.css';

let Book = props => {
    return (
        <div className="Book">
            <h3 onClick={props.change}>Name: {props.name} and Writer: {props.writer}</h3>
            <input type="text" onChange={props.inputChange} value={props.name} />
        </div>
    );
}

export default Book;