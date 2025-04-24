const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"

// creating initial state
const initialState = {
    task: [],
}

// Step-1 Create reducer for your app
const taskReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [ ...state.task , action.payload]
            };
        
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index)=>{
                return index != action.payload;
            })
            return {
                ...state,
                task: [ ...state.task , updatedTask]
            };
    
        default:
            return state;
    }
}

// Step-2 Create the Redux store using the reducer