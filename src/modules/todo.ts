import { getTodoList, updateTodoList } from '../utils/preference';
import { Todo as TodoType } from '../common/type';

// constant
export const ADD_TODO = 'ADD_TODO' as const;
export const UPDATE_TODO = 'UPDATE_TODO' as const;
export const DELETE_TODO = 'DELETE_TODO' as const;

// action
export const addTodo = (title: string) => ({
  type: ADD_TODO,
  payload: {
    title,
  },
});

export const updateTodo = (id: number, obj: object) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    obj,
  },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof updateTodo>
  | ReturnType<typeof deleteTodo>

export type TodoState = {
  todoList: Array<TodoType>;
}

const initialState: TodoState = {
  todoList: getTodoList(),
};

function todoReducer(state: TodoState = initialState, action: TodoAction) {
  switch (action.type) {
    case ADD_TODO: {
      const { title } = action.payload;
      const id = Date.now();
      const todo = { id, title, checked: false };

      const newTodoList = [todo, ...state.todoList];
      updateTodoList(newTodoList);

      return {
        ...state,
        todoList: newTodoList,
      };
    }
    case UPDATE_TODO: {
      const { id, obj } = action.payload;
      const { todoList } = state;

      const newTodoList = todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            ...obj,
          };
        }
        return todo;
      });
      updateTodoList(newTodoList);

      return {
        ...state,
        todoList: newTodoList,
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      const { todoList } = state;

      const newTodoList = todoList.filter((todo) => (todo.id !== id));
      updateTodoList(newTodoList);

      return {
        ...state,
        todoList: newTodoList,
      };
    }
    default:
      return state;
  }
}

export default todoReducer;
