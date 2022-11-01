const initialState = {
    Loading : false,
    products : [],
    error : ""
}
const productsReducer = (state=initialState , action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS_REQUEST" :
            return {
               ...state ,
               Loading : true
            }

        case "FETCH_PRODUCTS_SUCCESS" :
            return {
               Loading : false,
               products : action.payload
            }  

        case "FETCH_PRODUCTS_FAILURE" :
            return { 
                Loading : false,
                error : action.payload
            } 
        default : return state                 
    }   
}
export default productsReducer
