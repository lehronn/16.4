import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoForm.css';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    //walidacja proptypes i props default
    TodoForm.propTypes = {
      key: PropTypes.object,
      onClick: PropTypes.object
    },
    TodoForm.defaultProps = {
      key: {},
      onClick: {}
    }
    this.state = {
      inputForm: '',
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
    onSubmitHandler(event) {
      debugger
      this.props.addTodo(this.state.inputForm)
    }
    onChange(event) {
      this.setState({inputForm: event.target.value});
    }
      //walidacja i ustawienie domyślnych propsów
//    TodoForm.propTypes = {
//        key: PropTypes.object,
//        className: PropTypes.string,
//        todoCount: PropTypes.object,
//        data: PropTypes.object,
//        remove: PropTypes.object
//      },
//    TodoForm.defaultProps = {
//      key: 0,
//      className: '',
//      todoCount: {},
//      data:{},
//      remove:{}
//    }

  render() {
    return (
      <div className={style.TodoForm}>
          <form className= "TodoForm" onSubmit={(event) => this.onSubmitHandler(event)}>
          <input type="text" value={this.state.inputForm} onChange={(event) => this.onChange(event)}/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;