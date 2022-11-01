const increase = (product) => {
    return {
        type : "INCREASE",
       payload : product
    }
}

const decrease = (product) => {
    return {
       type : "DECREASE",
       payload : product
    }
}

const addItem = (product) => {
    return {
        type : "ADD_ITEM",
       payload : product
    }
}
const removeItem = (product) => {
    return {
        type : "REMOVE_ITEM",
       payload : product
    }
}
const clear = () => {
    return {
        type : "CLEAR"
    }
}
const checkout = () => {
    return {
        type : "CHECKOUT"
    }
}
export { increase , decrease , addItem , removeItem , checkout , clear}