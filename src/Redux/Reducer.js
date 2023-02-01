
const initialstate={
    product:[]
}

export const ProductReducer=(state=initialstate,action)=>{

    switch(action.type)
    {
        case "ADD_PRODUCT":
            console.log(state)
            return{
                ...state,
                product:[...state.product,action.payload]
            }
        default:
            return state
    }

}