

const initState = {
    count: 0
}

exports.reducer =(state=initState,action) => {
    console.log("reducer", action)
    switch (action.type) {
        case 'add_one':
        return {count: state.count+1}
    }

return state
}