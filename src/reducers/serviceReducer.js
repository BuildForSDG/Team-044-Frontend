const option = ''

const serviceReducer = (state = option, action) => {
    switch(action.type) {
        case 'SERVICE':
            return state = action.payload
        default: 
            return state
    }
}

export default serviceReducer;