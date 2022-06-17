import React, { Component } from 'react';

import { returntypeof } from 'react-redux-typescript';
import { connect } from 'react-redux';
import SideBarCard from '@components/widget/Card';
import TodoAddInput from '@components/widget/TodoAddInput';
import TodoTask from '@components/widget/TodoTask';
import { addTodo, updateTodo, deleteTodo } from '@modules/todo';
import { RootState } from '@modules/index';

const mapStateToProps = (state: RootState) => ({
  todoList: state.todo.todoList,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatchAddTodo: (title: string) => dispatch(addTodo(title)),
  dispatchUpdateTodo: (id: number, obj: object) => dispatch(updateTodo(id, obj)),
  dispatchDeleteTodo: (id: number) => dispatch(deleteTodo(id)),
});

const statePropTypes = returntypeof(mapStateToProps);
const actionPropTypes = returntypeof(mapDispatchToProps);

type Props = typeof statePropTypes & typeof actionPropTypes
type States = {
  inputUsername: string,
}

// eslint-disable-next-line react/prefer-stateless-function
class Todo extends Component<Props, States> {
  render() {
    const {
      dispatchAddTodo, dispatchUpdateTodo, dispatchDeleteTodo, todoList,
    } = this.props;

    return (
      <SideBarCard header="TODO">
        <TodoAddInput
          addTodo={dispatchAddTodo}
        />
        <ul>
          {
            todoList.map((todo) => (
              <TodoTask
                key={todo.id}
                id={todo.id}
                title={todo.title}
                checked={todo.checked}
                updateTodo={dispatchUpdateTodo}
                deleteTodo={dispatchDeleteTodo}
              />
            ))
          }
        </ul>
      </SideBarCard>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
