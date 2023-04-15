import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, REMOVE_ITEM } from "../constant";

export const cartData=(data=[],action)=>{
    switch(action.type){

        case ADD_TO_CART:
            if(isPresent(data,action.data.id))
            {
                data=data.map((item)=>{
                    if(item.id===action.data.id)
                    {
                        return {...item,quantity:(item.quantity+1)}
                    }
                    return {...item}
                })
            }
            else{
                data=[...data,{...action.data,quantity:1}];
            }
            console.log(...data);
            return [...data];

        case REMOVE_FROM_CART:
            if(isPresent(data,action.data.id)){
                data=data.reduce(function(result,item){
                    if(item.id===action.data.id)
                    {
                        const q=item.quantity-1;
                        if(q>0){

                            result.push({...item,quantity:q})
                        }
                        
                    }
                    else{
                        result.push({...item})
                    }
                    return result
                },[])
            }
            console.log(...data);
            return [...data];
        
        case REMOVE_ITEM:
            data=data.filter((item)=>item.id!==action.id)
            return[...data];
        case EMPTY_CART:
            data=[]
            return data;

        default:
            return [...data];
    }
}

const isPresent=(data,id)=>{
    for(let x=0;x< data.length;x++){
        if (data[x].id===id){
            return true;
        }
    }
    return false;
}