import { render } from "@testing-library/react";
import React, { Component } from "react";

class AddTodoCtrl extends Component{

    state={
        todoText : ""
    }

    changeTodoText = (event) => {
        this.setState({
            todoText:event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addTodoToState(this.state.todoText)
    };


    render(){
        return(
            <>
                <p>Add Todo</p>
                <form onSubmit={this.submitHandler}>
                    <input type="text" onChange={this.changeTodoText} value={this.state.todoText} />
                    <button>Add Todo</button>
                </form>
            </>
        )
    }
}

export default AddTodoCtrl;