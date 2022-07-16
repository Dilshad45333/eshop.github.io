//For add Item to cart
export const addCart= (product)=>{
return{
    type : "ADDITEM",
    payload : product
}
}

//For del Item to cart
export const delCart= (product)=>{
    return{
        type : "DELITEM",
        payload : product
    }
    }