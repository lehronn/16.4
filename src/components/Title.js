import React from 'react';
import uuid from 'uuid';
import style from './Title.css';

class Title extends React.Component {

  render() {
    return (
      <div className={style.TodoTitle}>
      <h1>TodoList App</h1>
      Getting Things Done stuff:
      <span>{this.props.todoCount}</span>
      </div>
    );
  }
}

export default Title;
