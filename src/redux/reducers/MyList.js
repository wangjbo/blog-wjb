
let initState = 2222
export default function MyListReducer(preState=initState,action){
    const {type,data} = action
    switch (type) {
        case 'add':
            return preState+data
        default:
            return preState
    }
}