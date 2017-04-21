import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

// kind of a restriction to assert types
TodoItem.propTypes = {
  todo: React.PropTypes.object
}


export default TodoItem;
