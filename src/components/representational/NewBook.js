import React, { Component, createRef } from "react";

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            writer: "",
            description: ""
        }
        this.bookName = createRef();
        this.writer = createRef();
        this.description = createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        console.log(this.bookName.current.value);
        console.log(this.writer.current.value);
        console.log(this.description.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>New Book Entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Name</label>
                    <br />
                    <input type="text" name="bookName"
                        ref={this.bookName} />
                    <br />
                    <label>Writer</label>
                    <br />
                    <input type="text" name="writer"
                        ref={this.writer} />
                    <br />
                    <label>Description</label>
                    <br />
                    <textarea type="text" name="description"
                        ref={this.description} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default NewBook;