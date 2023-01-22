import React from "react";

const BookDetail = props => {
    if (props.book === null) return <div></div>;
    return (
        <div>
            <h5>{props.book.bookName}</h5>
            <h3>{props.book.writer}</h3>
            <h5>{props.book.description}</h5>
        </div>
    )
}

export default BookDetail;