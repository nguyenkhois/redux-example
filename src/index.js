import { createStore } from 'redux';

/* ------ REDUX EXAMPLE ------ */
/* Template for action object
let action = {
    type: 'YOUR_TYPE',
    user: {id: <user_id>, name: <user_name>, age: <user_age>}
}
*/

// STEP 1 - Create the reducer
let userReducer = (state, action) => {
    if (state === undefined)
        state = [];
    
    //Definitions for action object here
    switch(action.type){
        case 'ADD_USER':
            return state.concat(action.user);
            break;
        case 'REMOVE_USER':
            return state.filter(item=>item.id !== action.user.id);
            break;
        default:
            return state;
            break;
    } 
};

// STEP 2 - Create a store by passing in the reducer
let store = createStore(userReducer);

// STEP 3 - Dispatch our first action to express an intent to change the state
store.dispatch({type:'ADD_USER',user:{id:1, name:'David', age:50}});
store.dispatch({type:'ADD_USER',user:{id:2, name:'John', age:40}});
store.dispatch({type:'REMOVE_USER',user:{id:1}});

//Viewing result
console.log(store.getState());