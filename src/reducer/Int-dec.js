const initialState = 0;
const changeTheNumber = (state = initialState, action)=>{
    switch(action.type){
        case "INCREMENT": return state+ action.paylod;
        case "DECREMENT": return state - action.paylod;
        default: return state;
    }
}

export default changeTheNumber