import React, { Component } from "react";
import axios from 'axios';
import AddTodoCtrl from "./AddTodo";
import TodoItemCtrl from './TodoItem';
import PropTypes from 'prop-types';

class ListingCtrl extends Component{
    state={
        todos:[]
    
    }

    componentDidMount(){
        axios.get("http://localhost:3333/todos").then((result) => {
            this.setState({
                todos:result.data
            })
        })
    }

    toggleCompleted = (index) => {
        const {todos} = this.state;
        const todo = todos[index];
        const newTodos = this.state.todos.map((todo,i) => {
            if(index === i){
                return{
                    ...todo,
                    completed:!todo.completed
                }
            }
            return todo;
        });
        axios.put("http://localhost:3333/todos/" + todo.id,{
            ...todo,
            completed: !todo.completed
        })
        .then(() => {
            this.setState({
                todos:newTodos
            })
        })

        this.setState({
            todos:newTodos
        })
    }
    
    deleteTodoToState = index => {
        const {todos} = this.state;
        const todo = todos[index];
        axios.delete("http://localhost:3333/todos/" + todo.id).then(() =>{

        const newTodos = todos.filter((todo,i) => {
            return index === i ? false : true;
        });
        this.setState({
            todos: newTodos
        });
        
        })
        
    }

    editTodoFromState = (index,newText) => {
        const{todos} = this.state;
        const todo = todos[index];
        axios.put("http://localhost:3333/todos/" + todo.id,{
            ...todo,
            text: newText
        })
        .then(() => {
            const newTodos = this.state.todos.map((todo,i)=>{
                if(index === i){
                    return{
                        ...todo,
                        text:newText
                    };
                }
                return todo;
            });
            this.setState({
                todos: newTodos
            });
        });

        
    }

    addTodoToState = text => {
        axios.post("http://localhost:3333/todos" ,{
            text,
            completed:false
        })
        .then(result => {
            const newTodos = this.state.todos.concat({
                text:text,
                completed:false
            });
            this.setState({
                todos:newTodos
            });
        });
        
    }

    render(){
        return(
            <>
                <ul>
                    {this.state.todos.map((todo,index)=>{
                        return(
                            <TodoItemCtrl 
                                toggleCompleted={this.toggleCompleted} 
                                deleteTodoToState={this.deleteTodoToState}
                                editTodoFromState={this.editTodoFromState}
                                todo={todo}
                                index={index} 
                                key={index} 
                            />
                        )
                    })}
                </ul>
                
                <AddTodoCtrl addTodoToState={this.addTodoToState} />
            </>
        )
    }
}


export default ListingCtrl;