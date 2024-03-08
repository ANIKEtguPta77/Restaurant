'use client'
import { useSearchParams } from 'next/navigation'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Menu from '@components/Menu'
import Loading from '@components/Loading'

const page = () => {


  const { data: session } = useSession()
  const [formvisible, setFormVisible] = useState(false);

  const ItemAdd = () => {
    setFormVisible(!formvisible)
  }

  const [submitting, setSubmtting] = useState(false);
  const [item, setItem] = useState({
    itemname: '',
    itemprice: '',
    available: true,
    category: '',
  })

  const router = useRouter()


  const createItem = async (e) => {

    setSubmtting(true);


    try {
      const response = await fetch('api/item/new', {
        method: 'POST',
        body: JSON.stringify({
          itemname: item.itemname,
          userId: session?.user.id,
          itemprice: item.itemprice,
          available: item.available,
          category:item.category
        })
      })

      if (response.ok) {
        setItem({
          itemname: '',
          itemprice: '',
          available: true,
          category:''
        })
        router.push('/update-menu');
      }
    }
    catch (error) {
      console.log(error)
    } finally {
      setSubmtting(false)
    }


  }

  const Optionchange=((event)=>{

      item.category=event.target.value
  })


  return (
    <>
      {session?.user.name ? (<>
        <Menu type="update" />
        <div>
          <button onClick={ItemAdd} className='bg-black text-white rounded-full w-20'>
            Add Item</button>
        </div>
        {formvisible &&
          <form onSubmit={createItem} >
            <label>
              <span>
                New Item Name:
              </span>
              <input value={item.itemname} placeholder='Name' required
                onChange={(e) => setItem({
                  ...item,
                  itemname: e.target.value
                })}>

              </input>
            </label>
            <label>
              <span>
                New Item Price:
              </span>
              <input value={item.itemprice} placeholder='Price' required
                onChange={(e) => setItem({
                  ...item,
                  itemprice: e.target.value
                })}>

              </input>
            </label>
            
            <label for="cars">Choose a car:</label>

            <select id="cars" name="cars" onChange={Optionchange} value={item.category}>
              <option value="">None</option>
              <option value="Bread">Bread</option>
              <option value="Dal">Dal</option>
              <option value="Gravy">Gravy</option>
            </select>
           
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
        }
      </>
      ) : <Loading />}
    </>

  )
}

export default page