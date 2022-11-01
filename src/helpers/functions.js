const shorten = (title) => {
    const splitedtitle = title.split(" ");
    const newtitle = `${splitedtitle[0]} ${splitedtitle[1]}`
    return newtitle
}
const quantityCount = (state , id)=> {
    const indexq = state.selectedItem.findIndex(item => item.id === id)
    if(indexq === -1){
        return false
    } else{
        return  state.selectedItem[indexq].quantity
    }
} 
const isInCart = (state, id) => {
    const result = !!state.selectedItem.find(item => item.id === id)
    return result
    
}
export { shorten , quantityCount , isInCart }
