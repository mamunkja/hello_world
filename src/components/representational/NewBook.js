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
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
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
                        value={this.state.bookName}
                        onChange={this.handleInputChange} />
                    <br />
                    <label>Writer</label>
                    <br />
                    <input type="text" name="writer"
                        value={this.state.writer}
                        onChange={this.handleInputChange} />
                    <br />
                    <label>Description</label>
                    <br />
                    <textarea type="text" name="description"
                        value={this.state.description}
                        onChange={event => this.handleInputChange(event)} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default NewBook;