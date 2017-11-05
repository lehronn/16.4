import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    //walidacja proptypes i props default
    TodoList.propTypes = {
      key: PropTypes.object,
      onClick: PropTypes.object
    },
    TodoList.defaultProps = {
      key: {},
      onClick: {}
    }
  }

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
