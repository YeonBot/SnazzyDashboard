import { getTodoList, addTodoList } from '../utils/preference';
import { Todo as TodoType } from '../common/type';

export const ADD_TODO = 'ADD_TODO' as const;

export const addTodo = (title: string) => ({
    type: ADD_TODO,
    payload: {
        title,
    }
});

type TodoAction =
    | ReturnType<typeof addTodo>

export type TodoState = {
    todoList: Array<TodoType>;
}

const initialState: TodoState = {
    todoList: getTodoList(),
};

function todo(state: TodoState = initialState, action: TodoAction) {
    switch (action.type) {
        case ADD_TODO:
            const title = action.payload.title;
            const id = Date.now();
            const todo = {id, title};
            addTodoList(todo);

            return {
                ...state,
                todoList: [todo, ...state.todoList],
            };
        default:
            return state;
    }
}

export default todo;
