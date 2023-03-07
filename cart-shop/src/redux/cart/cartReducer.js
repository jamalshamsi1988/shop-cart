// const initialState={
//     selectedItem:[] ,
//     itemsCounter : 0 ,
//     checkout:false ,
//     total:0
// }

// const sumItems = item =>{
//     const itemsCounter = item.reduce((total , product) => total + product.quantity ,0 );
//     const total = item.reduce((total , product)=> total + product.price * product.quantity , 0 ).toFix(2);
//     return ({itemsCounter , total})
// }

// const cartReducer = (state = initialState , action) =>{
//     switch (action.type){
//         case "ADD_ITEM":
//             if(!state.selectedItems.find(item => item.id === action.payload.id)){
//                state.selectedItems.push({
//                 ...action.payload ,
//                 quantity:1
//             })
//             return {
//                 ...state , selectedItems:[...state.selectedItems] ,
//                 ...sumItems(state.selectedItems),
//                 checkOut:false
//             }
//            }
//         case "REMOVE_ITEM" :
            
//             const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id)
//             return {
//                 ...state , selectedItem : [...newSelectedItem] ,
//                 ...sumItems(newSelectedItem)
//             }
//         case "INCRESE" :
//             const indexI= state.selectedItem.findIndex(item => item.id === action.payload.id)
//                 state.selectedItem[indexI].quantity++;
//                 return{
//                     ...state , 
//                     ...sumItems(state.selectedItem)
//                 }    
//         case "DECREASE" :
//             const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id);
//             state.selectedItem[indexD].quantity--;
//             return{
//                 ...state ,
//                 ...sumItems(state.selectedItem)
//             }
//         case "CHECKOUT" :
//                 return {
//                     selectedItem:[] ,
//                     itemsCounter : 0 ,
//                     checkout:true ,
//                     total:0
//                 }

//         case "CLEAR" :
//             return {
//                 selectedItem:[] ,
//                 itemsCounter : 0 ,
//                 checkout:false ,
//                 total:0
//             } 
//             default : return state  ;  
//         }
// }

// export default cartReducer;



const initialState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkOut:false
}

const sumItems= item =>{
    const itemsCounter=item.reduce((total , product)=> total + product.quantity,0);
    const total=item.reduce((total , product)=> total + product.price * product.quantity , 0).toFixed(2);
    return ({itemsCounter , total});
}

const cartReducer=(state=initialState , action)=>{

    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
               state.selectedItems.push({
                ...action.payload ,
                quantity:1
            })
            return {
                ...state , selectedItems:[...state.selectedItems] ,
                ...sumItems(state.selectedItems),
                checkOut:false
            }
                
            }
            
    case "REMOVE_ITEM":
        const newSelectedItems=state.selectedItems.filter(item => item.id !==action.payload.id)
        return {
            ...state , selectedItems:[...newSelectedItems] ,
            ...sumItems(newSelectedItems)
        }

     case "INCREASE" :
        const indexI=state.selectedItems.findIndex(item => item.id === action.payload.id);
        state.selectedItems[indexI].quantity++;
        return {
            ...state ,
            ...sumItems(state.selectedItems)
        }

        case "DECREASE" :
            const indexD=state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return{
                ...state ,
                ...sumItems(state.selectedItems)
            }
        
        case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkOut:true
            }

        case "CLEAR":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkOut:false
            }
        default :
        return state;
    }

}
export default cartReducer;