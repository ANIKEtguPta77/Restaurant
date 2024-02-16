'use client'
import { useSearchParams } from 'next/navigation'
import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Menu from '@components/Menu'

const page = () => {


  const {data:session}=useSession()
  const ItemAdd=()=>{

  }

  const [submitting,setSubmtting]=useState(false);
  const [item,setItem]=useState({
    itemname:'',
    itemprice:'',
    available:true
  })

  const router=useRouter()


  const createItem=async(e)=>{
    
    setSubmtting(true);
    

    try{
      const response=await fetch('api/item/new',{
        method:'POST',
        body:JSON.stringify({
          itemname:item.itemname,
          userId:session?.user.id,
          itemprice:item.itemprice,
          available:item.available
        })
      })

      if(response.ok)
      {
           setItem({
            itemname:'',
            itemprice:'',
            available:true
           })
          router.push('/update-menu');
      }
    }
    catch(error){
      console.log(error)
    }finally{
      setSubmtting(false)
    }

    
  }

  

  return (
    <>
    <Menu type="update"/>
    <div>
      <button onClick={ItemAdd} className='bg-black text-white rounded-full w-20'>
      Add Item</button>
    </div>
    <form onSubmit={createItem}>
        <label>
          <span>
            New Item Name:
          </span>
          <input value={item.itemname} placeholder='Name' required 
          onChange={(e)=>setItem({
            ...item,
            itemname:e.target.value
          })}>

          </input>
        </label>
        <label>
          <span>
            New Item Price:
          </span>
          <input value={item.itemprice} placeholder='Price' required 
          onChange={(e)=>setItem({
            ...item,
            itemprice:e.target.value
          })}>

          </input>
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
        <Link href="/" className='text-gray-500 text-sm'>
          Cancel
        </Link>
        <button
        type="submit"
        disabled={submitting}
        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
        >
        Add
        </button>

        </div>
    </form>
    </>
  )
}

export default page