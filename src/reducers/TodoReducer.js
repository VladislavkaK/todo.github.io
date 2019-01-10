const initState = {
    items: [
        'Eat',
        'Sleep',
        'Feed cat',
        'Play in games on computer'
    ],
    completed: false,
}

const TodoReducer = (state = initState, action) => {

    switch (action.type) {   
        case "ADD_ITEM": 
            return ADD_ITEM(state, action);
        case "DELETE_ITEM": 
           return DELETE_ITEM(state, action);
        case "TOGGLE_ITEM":
            return TOGGLE_ITEM(state, action);
        default:
            return state;
    }

};

/* Добавляем новую задачу */

function ADD_ITEM(state, action) {
 
  return { ...state, items: [...state.items, action.payload.value], completed: false, };  

}

/* Удаляем задачу */

function DELETE_ITEM(state, action) {

    return { ...state, items: [...state.items.filter((item, i) => i !== action.payload.id)] };  

}

/* Выполнена задача(зачеркнуть) */

function TOGGLE_ITEM(state, action) {

    return { ...state, completed: [...state.items.map((item, i) => {
        return i === action.payload.id ? true : '';
    }) ]};  

}


export default TodoReducer;