import React from 'react';
import { useReducer } from "react";

const initallState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkOut:fals
}
const cartReducer=(state , action)=>{

    switch(action.type){
        case "ADD-ITEM":
            if(!state.selectedItems.find(item => item.id === action.pyload.id)){
               state.selectedItems.push({
                ...action.pyload ,
                quantity:1
            })
            return {...state , selectedItems:[...state.selectedItems]}
            }
    case "REMOVE_ITEM":
        const newSelectedItems=state.selectedItems.filter(item => item.id !==action.pyload.id)
        return {...state , selectedItems:[...newSelectedItems]}
    }
}

const CartContextProvider = () => {

    const[state , dispatch]=useReducer(cartReducer , initallState)
  return (
    <div>
      
    </div>
  )
}

export default CartContextProvider
