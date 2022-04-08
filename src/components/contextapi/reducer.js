export const initialState = {
    basket:[]
}


export const getbasketTotal = (basket)=> 
    basket?.reduce((amount,item)=> item.price + amount ,0)

const reducer =(state=[],action)=>{
    console.log(action)
    console.log(state)
    switch (action.type) {
        case "ADD_ITEM":
            // add item to basket
            return {
                ...state,
                basket:[...state.basket,action.data]
            };
        case "REMOVE_ITEM":
            // add item to basket
            // let basketgot = [...state.basket]
            // const index = state.basket.findIndex((item)=>item.id === action.data)
            // basketgot.splice(index,1)

            let basketgot = state.basket.filter((item)=>item.id !== action.data)
            return {
                ...state,
                basket:basketgot
            };    
        default:
            return state;
    }
}

export default reducer