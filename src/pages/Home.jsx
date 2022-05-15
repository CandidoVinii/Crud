import React from 'react';
import { connect } from 'react-redux';
import { changeTasks } from '../redux/action/action';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      saveTask: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { saveTask } = this.state;
    const newTask = this.state;
    const { changeData } = this.props;
    delete newTask.saveTask;
    saveTask.push(newTask);
    this.setState({
      task: '',
      date: new Date().toDateString(),
      saveTask,
    });
    changeData({ saveTask });
  };

  removeTask = (e) => {
    const { saveTask } = this.state;
    const taskName = e.target.id;
    const newArr = saveTask.splice(taskName, [taskName]);
    console.log(newArr);
    this.setState({ saveTask: newArr });
  };

  render() {
    const { task, saveTask, date } = this.state;
    console.log(saveTask);
    // console.log(saveTask)
    return (
      <div>
        <form action="">
          <input
            value={task}
            name="task"
            type="text"
            onChange={this.handleChange}
            placeholder="digite uma nova tarefa"
          />
          <button type="button" onClick={this.handleClick}>
            Adicionar
          </button>
        </form>
        {saveTask.length <= 0 ? (
          <p>Nenhuma Tarefa</p>
        ) : (
          saveTask.map((tarefa, index) => (
            <div key={index}>
              <p name={index}>
                {tarefa.task}
                <br />
                {date}
              </p>
              <button
                type="button"
                name={tarefa.task}
                id={index}
                onClick={this.removeTask}
              >
                Finalizar Tarefa
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeData: (state) => {
    dispatch(changeTasks(state));
  },
});

export default connect(null, mapDispatchToProps)(Home);
