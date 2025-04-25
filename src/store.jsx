import { createStore } from "redux"
import { composeWithDevTools } from '@redux-devtools/extension';

const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"

// creating initial state
const initialState = {
    task: [],
}

// Step-1 Create reducer for your app
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            };

        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index != action.payload;
            })
            return {
                ...state,
                task: updatedTask,
            };

        default:
            return state;
    }
}

// Step-2 Create the Redux store using the reducer

export const store = createStore(taskReducer, composeWithDevTools());
// console.log(store);

// Step-3 Log the initial state
// console.log("initial state: ", store.getState());

// Step-4 Dispatch an action to add the task
store.dispatch(addTask("Buy some goods"))
store.dispatch(addTask("Buy some graphs"))
store.dispatch(addTask("Buy some Mango"))
store.dispatch(addTask("Buy some Banana"))
// console.log("updated state: ", store.getState());

store.dispatch(addTask("Buy some vegitables"))

store.dispatch(deleteTask(0))
// console.log("Deleted state: ", store.getState());

// Step-5 Create an actore creators
export function addTask(data){
    return {
        type: ADD_TASK,
        payload: data,
    }
}

export function deleteTask(id){
    return {
        type: DELETE_TASK,
        payload: id,
    }
}