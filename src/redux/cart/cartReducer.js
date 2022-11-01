const initialState = {
    selectedItem : [],
    itemsCounter : 0,
    total : 0,
    checkout : false,
}
 const sumItems = item => {
  const itemsCounter = item.reduce((total , product) =>  total+ product.quantity , 0)
  const total = item.reduce((total , product) => total + product.price * product.quantity,0).toFixed(2)
  return {itemsCounter , total}
 }
 
const cartReducer = (state=initialState , action) => {
     switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItem.find(item =>item.id === action.payload.id)){
                state.selectedItem.push({
                    ...action.payload,
                    quantity : 1
                })
              
            }
            return {
                ...state, 
                selectedItem : [...state.selectedItem],
                ...sumItems(state.selectedItem) ,
                checkout : false,
            }
        case "REMOVE_ITEM" :
          const newSeletedItem = state.selectedItem.filter(item => item.id !== action.payload.id)
            return {
                ...state ,
                 selectedItem : [...newSeletedItem] ,
                 ...sumItems(newSeletedItem)
                 
            }
        case "INCREASE": 
            const IndexI= state.selectedItem.findIndex(item => item.id === action.payload.id)    
            state.selectedItem[IndexI].quantity++;
            return {
             ...state ,
             ...sumItems(state.selectedItem)
            }
        case "DECREASE":
            const IndexD = state.selectedItem.findIndex(item => item.id === action.payload.id)
                    state.selectedItem[IndexD].quantity--;
               return {
                  ...state ,
                  ...sumItems(state.selectedItem)
               }     
        case "CLEAR":
            return{
                selectedItem : [],
                itemsCounter : 0,
                total : 0,
                checkout : false,
            }

        case "CHECKOUT":
            return{
                selectedItem : [],
                itemsCounter : 0,
                total : 0,
                checkout : true,
            }
         default : return state                 
     }
}
export default cartReducer