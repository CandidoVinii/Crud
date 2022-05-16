import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../redux/action/action';

class Tasks extends React.Component {
  remove = (e) => {
    const newTask = this.state;
    const { removeSelectedTask } = this.props;
    delete newTask.saveTask;
    removeSelectedTask();
  }
  render() {
    const {
      stateTask: { task },
    } = this.props;
    console.log(task.saveTask);
    return (
      <div>
        {task.saveTask.length <= 0 ? (
          <p>Nenhuma Tarefa</p>
        ) : (
          task.saveTask.map((tarefa, index) => (
            <ul key={index}>
              <li>
                {tarefa.task} | {tarefa.date}
              </li>
              <button
                type="button"
                name={tarefa.task}
                onClick={removeTask}
              >
                Finalizar Tarefa
              </button>
            </ul>
          ))
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  stateTask: state.reducerTasks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeSelectedTask: (task) => dispatch(removeTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
