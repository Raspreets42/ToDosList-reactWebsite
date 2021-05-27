import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container" >
            <hr />
            <h3 className="my-4">ToDo's List</h3>
            {props.todos.length===0 ? "No Todos to display" :
            props.todos.map( (todo) => {
                return ( <TodoItem todo ={todo} key={todo.sno} onDelete={props.onDelete} /> )
            } )
            }
        </div>
    )
}
