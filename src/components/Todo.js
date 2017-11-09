import TodoForm from './TodoForm';
import style from './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <li className={style.Todo}>
        {this.props.todo}
        <button className="removeButton" onClick = {event => this.handleClick()}>Remove</button>
      </li>
    )
  }
  handleClick(event) {
    this.props.remove(this.props.id)
  }
}

//walidacja proptypes i props default
Todo.propTypes = {
  remove: PropTypes.func.isRequired,
  todo: PropTypes.func.isRequired
};

export default Todo;

