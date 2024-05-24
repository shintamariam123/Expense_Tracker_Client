import React, { useEffect, useState, useContext } from 'react'
import Add from '../components/Add'
import { deleteTransactionAPI, getUserTransactionAPI } from '../services/allAPI'
import { addResponseContext, editResponseContext } from '../contexts/ContextAPI'
import Edit from '../components/Edit'
import Graph from './Graph'
import Label from './Label'
function View() {
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const {addResponse,setAddResponse} = useContext(addResponseContext)
  // const [searchKey,setSearchKey] = useState("")
  const [userTransaction,setUserTransaction] = useState([])
 console.log(userTransaction);

useEffect(()=>{
  getUserTransaction()
}, [addResponse,editResponse])
// const totalBalance = userTransaction.reduce((acc, transaction) => acc + transaction.amount, 0);


const getUserTransaction = async ()=>{
  const token = sessionStorage.getItem("token")
  const reqHeader = {
    "Authorization": `Bearer ${token}`
  }
  try{
    const result = await getUserTransactionAPI(reqHeader)
  console.log(result);
  if(result.status==200){
    setUserTransaction(result.data)
  }
  }catch(err){
    console.log(err);
  }
}
const handleDeleteTransaction = async (transactionId)=>{
  const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
  const result = await deleteTransactionAPI(transactionId,reqHeader)
  if(result.status==200){
    getUserTransaction()

  }else{
    console.log(result);
  }
}
}
  return (
    <>
   
     <div className="d-flex justify-content-between w-100">
        <h2 className='text-warning ms-5'>All Transactions</h2>
      
        <div><Add/></div>
        </div>
       <div className='d-flex align-items-center justify-content-center'>
        <div>
          <Graph userTransaction={userTransaction}/>
        </div>
        <div className='flex flex-col py-10 gap-4 ms-5'>
          <Label userTransaction={userTransaction}/>
        </div>
       </div>

        {/* <input onChange={e=>setSearchKey(e.target.value)} className='form-control w-25 ' type="text" name="" id="" placeholder='Search By Type' /> */}

     
      <div className='mt-4'>
      <table className='table shadow mt-5 ms-4'>
    <thead>
        <tr>
        <th>Category</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Edit</th>
        <th>Delete</th>

        </tr>
    </thead>
    <tbody>
      {
        userTransaction?.length>0? userTransaction.map((transaction,index)=>(
          <tr key={index}>
            <td> {transaction.category}</td>
            <td> {transaction.type}</td>
            <td>₹{transaction.amount}</td>
            <td> <Edit transaction={transaction}></Edit></td>
            <td><button onClick={()=>handleDeleteTransaction(transaction?._id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
          </tr>
        )): <tr className='text-danger fs-4 fw-bolder'> No Transactions to display!!!</tr>
      }
    </tbody>
   </table>
      </div>
      
    
    </>
  )
}

export default View