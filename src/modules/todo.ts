import { getTodoList, addTodoList, updateTodoList } from '../utils/preference';
import { Todo as TodoType } from '../common/type';

// constant
export const ADD_TODO = 'ADD_TODO' as const;
export const UPDATE_TODO = 'UPDATE_TODO' as const;

// action
export const addTodo = (title: string) => ({
    type: ADD_TODO,
    payload: {
        title,
    }
});

export const updateTodo = (id: number, obj: object) => ({
    type: UPDATE_TODO,
    payload: {
        id,
        obj,
    }
})

type TodoAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof updateTodo>

export type TodoState = {
    todoList: Array<TodoType>;
}

const initialState: TodoState = {
    todoList: getTodoList(),
};

function todo(state: TodoState = initialState, action: TodoAction) {
    switch (action.type) {
        case ADD_TODO:
            {
                const title = action.payload.title;
                const id = Date.now();
                const todo = {id, title, checked: false};
                addTodoList(todo);

                return {
                    ...state,
                    todoList: [todo, ...state.todoList],
                };
            }
        case UPDATE_TODO:
            {
                const { id, obj } = action.payload;
                const { todoList } = state;

                const newTodoList = todoList.map(todo => {
                    if(todo.id === id) {
                        return {
                            ...todo,
                            ...obj,
                        }
                    }
                    return todo;
                });
                

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

export default todo;
