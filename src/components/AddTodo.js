import React from "react";

class AddTodo extends React.Component {
    state = {
        title: ""
    };

    onInputChange = e => {
        this.setState({
            title: e.target.value
        });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ""
        });

    };


    render() {
        return (
            <form className="form__container" onSubmit={this.addTodo} >
                <input
                    type="text"
                    placeholder="What do you want to do?"
                    className="input__text"
                    value={this.state.title}
                    onChange={this.onInputChange}
                />


                <input type="submit" value="+" className="input__submit" />
            </form>
        );
    }
}
export default AddTodo;
