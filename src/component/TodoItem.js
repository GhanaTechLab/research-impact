import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Todocss.css'


export class TodoItem extends Component {
    getStyle(){
       return {
           backgroundColor:'#f4f4f4',
           padding:'10px',
           borderBottom:'1px #ccc dotted',
           textDecoration:this.props.todo.completed?'line-through':'none'
       }
    }
    render() {
        return (
            <div style={{textDecoration:this.props.todo.completed?'line-through':'none',borderBottom:'1px #ccc dotted',padding:'10px',backgroundColor:'#f4f4f4'}} className="hello hello2">
                <input type="checkbox" />
                <div>{this.props.todo.title}</div>
            </div>
        )
    }
}

TodoItem.prototypes={
    todo:PropTypes.object.isRequired
  }

//   const itemStyle={
//       backgroundColor:'#f4f4f4'
//   }

export default TodoItem
