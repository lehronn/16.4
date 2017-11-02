import React from 'react';
// import style from './TodoList.css';

class TodoList extends React.Component {
  //walidacja proptypes i props default

  render() {
    console.log(this.props.data);
    return (
      <div>
        {this.props.data.map(item => (
          <div key={item.id}>
            {item.text}
            <button onClick={()=> this.props.remove(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
