import React, { useEffect, useState } from 'react'
import HeaderFvrt from '../Components/HeaderFvrt';
import { Button } from 'react-bootstrap';
import { deleteACart, getCart } from '../Services/allAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {

  const [allCart,setallCart] = useState([])
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()


  // getallcart
  const getAllCart = async()=>{
    const {data} = await getCart()
    setallCart(data);
  }

  // total amount
  const totalAmount = ()=>{
    if (allCart.length>0) {
      setTotal(allCart.map(items=>parseInt(items.rate)).reduce((r1,r2)=>r1+r2))
    } else {
      setTotal(0)
    }
  }

  // checkout
  const checkOut = ()=>{
    toast.success("Order placed")
    setallCart([null])
    navigate('/menu')
  }


  // delete a cart
  const removeCart = async (id)=>{
    await deleteACart(id)
    // get get watch history
    getAllCart()
  }

  useEffect(()=>{
    getAllCart()
    totalAmount()
  },[allCart])

  return (
    <div>
      <HeaderFvrt />
      <div>
        <div className='mt-24'>
              <div className='row ms-3  me-2'>
                <div className='col-md-8'>
                  <table className=' mt-5 table border border-secondary rounded p-5 table-hover'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Items Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                   {
                      allCart.length>0?
                      allCart.map((item,index)=>(
                        <tbody>
                            <tr>
                              <td>{index+1}</td>
                              <td className='fw-bold'>{item.name}</td>
                              <td><img height={'100px'} width={'100px'} src={item.imageUrl} alt="" /></td>
                              <td>${item.rate}</td>
                              <td><Button className='btn bg-light border-light' onClick={()=>removeCart(item.id)}><i className='fa-solid fa-trash text-danger '></i></Button></td>
                            </tr>
                        </tbody>
                      )):null  
                    }
                  </table>
                </div>
                <div className='col-lg-4 w-3/4 mt-5 border rounded border-secondary shadow' style={{height:'15%'}}>
                  <h2 className='fw-bolder text-dark  mt-5'>Order Summary</h2>
                  <hr />
                  <div className='ms-3 mt-3'>
                    <h5>Total Items : <span>{allCart.length}</span></h5>
                    <h4 className='mb-4'>Total : $<span>{total}</span></h4>
                    <div className='d-grid mt-5'>
                      <Button variant="outline-dark" onClick={()=>checkOut()}  className='btn rounded mb-5'>Check Out</Button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Cart