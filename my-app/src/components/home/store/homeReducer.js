 const defaultState = {
    demo: [],
    demo2: [],
    demo3: [],
    demo5: [],
};
export default (state=defaultState,action)=>{
    if(action.type==='init_home_data'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.demo=action.data.demo;
        newState.demo2=action.data.demo2;
        newState.demo3=action.data.demo3;
        newState.demo5=action.data.demo5;

         return newState
    }

    return state
}

