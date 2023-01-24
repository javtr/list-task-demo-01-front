const types = {
    loadData: 'load - data'
}

const initialStore = {
        lists:[]
}

const storeReducer = (state, action) => {
    switch(action.type) {

        case types.loadData:
            return {
                ...state,
                lists: action.payload
            }

        default:
            return state;
    }
}

export { initialStore, types }
export default storeReducer