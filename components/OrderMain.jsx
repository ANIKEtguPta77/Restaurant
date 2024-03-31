'use client'
// import React, { useState, useRef, useEffect } from "react";
// import { Paper } from '@mui/material';
// import {motion} from "framer-motion"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useSession } from "next-auth/react";
// import Loading from "@components/Loading";
import Nav from '@components/Nav';
// import OrderList from "./OrderList";

 
 

const OrderMain = ({orderitems}) => {

    //  const{data:session}=useSession();
     console.log(orderitems,"fds");

    // const [from,setfrom]=useState();
    // const handleFinish=async(item)=>{
    //     const isConfirmed=confirm(`Are you sure ${item.name} Order is Ready`)

    //     if(isConfirmed)
    //     {
    //         try{
    //             const response=await fetch(`/api/order/${item._id}`,{
    //                 method:'PATCH',
    //                 body:JSON.stringify({
    //                     finish:!item.finish
    //                  })
    //             })

    //             if(response.ok)
    //             {
    //                 location.reload()
    //                 router.push('/orders');
    //             }
    //         }catch(error){
    //             console.log(error);
    //         }
    //     }

    //   }

    //   const handleDeliver=async(item)=>{
        

    //     const isconfirmed=confirm(`Are you sure you have deliverd the order ${item.name}`);


    //     if(isconfirmed)
    //     {
    //         try{
    //             await fetch(`/api/order/${item._id}`,{
    //                 method:'DELETE',

    //             });

    //             const filteredorders=orders.filter((p)=>
    //             p._id!==item._id
    //             );

    //             setOrders(filteredorders);
    //         }catch(error){
    //             console.log(error)
    //         }
    //     }

    //   }


  return (
    <>
    <Nav type="rest"/>
    {/* {session?.user.name ?(
        <Paper 
        className='w-full p-3 rounded-3xl flex flex-col'
        component={motion.div}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        elevation={24}
        >
        <div className='flex flex-row'>
            <p className='text-4xl sm-text-4xl md:text-5xl lg:text-7xl w-full font-anta flex items-center justify-center'>Orders</p>
            <div className='mt-2 md:mt-7'><ShoppingCartIcon style={{fontSize:36,color:'red'}}/></div>
            </div> 
            <OrderList
                data={orderitems}
                handleDeliver={handleDeliver}
                handleFinish={handleFinish}
            />
        </Paper>
    ):
    (
        <Loading />
    )
    } */}
    </>
  );
};

export default OrderMain