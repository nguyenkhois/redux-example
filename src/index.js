import { createStore } from 'redux';

/* ------ REDUX EXAMPLE ------ */
/* Template for action object
let action = {type: 'YOUR_TYPE',
              user: {your_value}
             }
*/

// STEP 1 - Create the reducer
let userReducer = (state, action) => {
    if (state === undefined)
        state = [];
    
    //Definitions for action object here 
    if (action.type === 'ADD_USER')
        return state.concat(action.user);

    //Returns always "state"
    return state;
};

// STEP 2 - Create a store by passing in the reducer
let store = createStore(userReducer);

// STEP 3 - Dispatch our first action to express an intent to change the state
store.dispatch({type:'ADD_USER',user:{name:'David',age:50}});
store.dispatch({type:'ADD_USER',user:{name:'John',age:40}});

//Viewing result
console.log(store.getState());