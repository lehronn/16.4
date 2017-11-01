import React from 'react';
import uuid from 'uuid';
import style from './Title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  showItemQuantity() {
    return this.props.innerText = this.props(data.length);
  }

  render() {
    return (
      <div className={style.TodoTitle}>
      <h1>TodoList App</h1>
      Getting Things Done stuff:
      showItemQuantity();
      </div>
    );
  }
  }

  export default Title;
