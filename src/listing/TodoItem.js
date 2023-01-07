import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItemCtrl extends Component{

    state={
        isEditing: false
    }
    toggleEditing= () => {
        this.setState({
            isEditing: !this.state.isEditing
        });
    };
    clickHandler = () => {
        this.props.toggleCompleted(this.props.index);
    };
    deleteTodo = () => {
        this.props.deleteTodoToState(this.props.index)
    };
    editTodoSubmitHandler = (event) => {
        event.preventDefault();
        this.props.editTodoFromState(this.props.index,this.newText.value);
        this.toggleEditing();
    }

    render(){

        // const {todo} = this.props;
        // both are same
        const todo = this.props.todo;

        if(this.state.isEditing){
            return <li>
                <form onSubmit={this.editTodoSubmitHandler}>
                    <input type="text" defaultValue={todo.text} ref={(node) =>{
                        this.newText = node;
                    }} />
                    <button type="submit">Save</button>
                    <button onClick={this.toggleEditing}>Cancel</button>

                </form>
            </li>
        }
        
        return(
            <>
                <li 
                className={todo.completed ? "completed_t" : "completed_f" } >
                    <span  onClick={this.clickHandler}>{todo.text}</span>
                    <span style={{marginLeft:"10px"}}>
                        <button onClick={this.toggleEditing}>Edit</button>
                        <button onClick={this.deleteTodo}>Delete</button>
                    </span>
                </li>
            </>
        )
    }
}


TodoItemCtrl.propTypes = {
    toggleCompleted: PropTypes.func.isRequired,
    deleteTodoToState: PropTypes.func.isRequired,
    editTodoFromState: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
};
TodoItemCtrl.defaultProps = {
    index:0
}
export default TodoItemCtrl;