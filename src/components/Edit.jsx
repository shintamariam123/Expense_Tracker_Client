import React, { useState, useContext, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editTransactionAPI } from '../services/allAPI';
import { editResponseContext } from '../contexts/ContextAPI';

function Edit({transaction}) {
  // console.log(transaction);
  const {editResponse,setEditResponse} = useContext(editResponseContext)

  const [transactionData,setTransactionData] = useState({
    id:transaction?._id,category:transaction?.category, type:transaction?.type, amount: transaction?.amount
  })
  const [show, setShow] = useState(false);
  
  const handleClose = () => {
    setShow(false);
    setTransactionData({
      id:transaction?._id,category:transaction?.category, type:transaction?.type, amount: transaction.amount
    })
  }
  const handleShow = () => {
    setShow(true);
    setTransactionData({
      id:transaction?._id,category:transaction?.category, type:transaction?.type, amount: transaction.amount
    })
  }

  const handleUpdateTransaction = async()=>{
    const {category,type,amount} = transactionData
    if(!category || !type || !amount){
      toast.warning("Please fill the form completely!!!")
    }else{
      const reqBody = {
        category,
        type,
        amount
      }
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`//need to pass token to server so i can pass token in reqbody or reqheader but token is securely pass using bearer word in reqheader
        }
      try{
   const result = await editTransactionAPI(transactionData.id,reqBody,reqHeader)
   console.log(result);
   if (result.status == 200) {
    handleClose()
    setEditResponse(result)
   }else{
    console.log(result.response);

   }
      }catch(err){
        console.log(err);

      }
    }
  }
}
  return (
    <>
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-edit"></i></button>
          <Modal size='md' centered
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            {/* <Modal.Title>Update Transaction Details</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>


            <h1 style={{ textAlign: 'center', color: 'orange' }} className=' pb-4 text-xl'>Update Transaction Details</h1>
            <div className='grid gap-4'>
              <select name='category' value={transactionData.category} onChange={(e) => setTransactionData({ ...transactionData, category: e.target.value })} className='form-control'>
                <option value="tip" >Tip</option>
                <option value="tip" >Tip</option>
                <option value="salary" >Salary</option>
                <option value="project" >Project</option>
                <option value="food" >Food</option>
                <option value="movie" >Movie</option>
                <option value="bills" >Bills</option>
                <option value="medical" >Medical</option>
                <option value="fee" >Fee</option>
                <option value="tax" >Tax</option>
                <option value="other" >Other</option>

              </select>
              <select name='type' value={transactionData.type} onChange={(e) => setTransactionData({ ...transactionData, type: e.target.value })} className='form-control'>
                <option value="Investment" >Investment</option>
                <option value="Investment" >Investment</option>

                <option value="Expense" >Expense</option>
                <option value="Savings" >Savings</option>
              </select>
              <div className='input-group'>
                <input value={transactionData.amount} onChange={(e) => setTransactionData({ ...transactionData, amount: e.target.value })} name='amount' type='number' placeholder='Amount' className='form-control'></input>
              </div>
              {/* <div className='input-group'>
                <input value={transactionDetails.date} onChange={(e) => setTransactionDetails({ ...transactionDetails, date: e.target.value })} name='date' type='date' placeholder='Date' className='form-control'></input>
              </div> */}
              <div className='submit-btn'>
                <button onClick={handleClose} style={{ backgroundColor: 'white', color: 'black' }} className='btn border py-2 mb-2   w-full mt-3'>Cancel</button>
                <button onClick={handleUpdateTransaction} style={{ backgroundColor: 'orange' }} className='btn border py-2 text-white mt-3 mb-4 w-full'>Update Transaction</button>
              </div>
            </div>



          </Modal.Body>

        </Modal>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    
    </>
  )

}

export default Edit