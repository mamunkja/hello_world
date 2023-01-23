import React, { Component } from "react";

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            writer: "",
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleSubmit = event => {
        console.log(this.state);
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
                        onChange={event => this.handleInputChange(event)} />
                    <br />
                    <label>Writer</label>
                    <br />
                    <input type="text" name="writer"
                        value={this.state.writer}
                        onChange={event => this.handleInputChange(event)} />
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