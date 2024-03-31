import React from 'react'
import OrderItem from './OrderItem';

const OrderList=({data,handleDeliver,handleFinish})=>{
    return(
        <div className='w-full mt-7 mb-4 flex flex-col justify-center items-center'>
            {data.map((item)=>(
                <OrderItem
                    order={item}
                    handleDeliver={()=>handleDeliver&& handleDeliver(item)}
                    handleFinish={()=>handleFinish&& handleFinish(item)}
                />
            ))}
        </div>

    );
};

export default OrderList