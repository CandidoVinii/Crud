import React from 'react';
import { connect } from 'react-redux';
import Tasks from '../components/Tasks';
import { changeTasks } from '../redux/action/action';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      saveTask: [],
      addBtn: true,
    };
  }

  handleChange = ({ target }) => {
    this.validateInput();
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateInput = () => {
    const { task } = this.state;
    if (task.length === 0) {
      this.setState({ addBtn: false });
    }
    this.setState({ addBtn: false });
  };


  handleClick = () => {
    const { saveTask, date } = this.state;
    const newTask = this.state;
    const { changeData } = this.props;
    delete newTask.saveTask;
    saveTask.push(newTask);
    this.setState({
      task: '',
      date: new Date().toDateString(),
      saveTask,
      addBtn: true,
    });
    changeData({ saveTask, date });
  };

  render() {
    const { stateLogin: login } = this.props; 
    const { task, addBtn } = this.state;

    return (
      <div>
        <h1>TO-DO LIST</h1>
        <p>{`Olá ${login.login.userName}, aqui estão suas tarefas `}</p>
        <form action="">
          <input
            value={task}
            name="task"
            type="text"
            onChange={this.handleChange}
            placeholder="digite uma nova tarefa"
          />
          <button type="button" disabled={addBtn} onClick={this.handleClick}>
            Adicionar
          </button>
        </form>
        <Tasks />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateLogin: state.reducerLogin,
});

const mapDispatchToProps = (dispatch) => ({
  changeData: (state) => {
    dispatch(changeTasks(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
