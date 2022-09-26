export const incNumber =(num)=>{
    return{ 
        type: "INCREMENT",
        paylod: num
    }
}
export const decNumber = (num) => {
    return{ 
        type: "DECREMENT",
        paylod: num
    }
}