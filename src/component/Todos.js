import React,{Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
        return this.props.todos.map((t,i)=>{
          return  <TodoItem key={i} todo={t}></TodoItem>
        })
    }

}

Todos.prototypes={
  todos:PropTypes.array.isRequired
}

export default Todos;
