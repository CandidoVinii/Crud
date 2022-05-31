import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../redux/action/action';

class Tasks extends React.Component {
  render() {
    const {
      stateTask: { saveTask },
    } = this.props;
    const { remove } = this.props;
    console.log(saveTask);
    return (
      <div>
        {saveTask.length <= 0 ? (
          <p className='text-center font-black'>Nenhuma Tarefa</p>
        ) : (
          saveTask.map((tarefa) => (
            <ul
              key={tarefa.id}
              className="mt-4 font-black text-center"
            >
              Tarefa:
              <div className='bg-zinc-300 rounded '>
                <li className='mt-2 font-bold'>
                  {tarefa.task} | {tarefa.date}
                </li>
                <div className='flex justify-center items-center'>
                  <button
                    type="button"
                    className='bg-red-600 text-white font-black rounded-md py-1 px-1'
                    name={tarefa.task}
                    onClick={ () => remove(tarefa.id)}
                  >
                    Finalizar Tarefa
                  </button>
                </div>
              </div>
            </ul>
          ))
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  stateTask: state.task,
});

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removeTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
