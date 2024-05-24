import React, { useContext, useState,useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTransactionAPI } from '../services/allAPI';
import { addResponseContext } from '../contexts/ContextAPI';

function Add() {
  const {addResponse,setAddResponse} = useContext(addResponseContext)
  const [show, setShow] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState({
    category: "", type: "", amount: ""
  })

 
  const handleClose = () => {
    setShow(false);
    setTransactionDetails({ category: "", type: "", amount: "" })
  }
  const handleShow = () => setShow(true);
  console.log(transactionDetails);

  

  const handleSubmit = async () => {
    const { category, type, amount } = transactionDetails
    if (!category || !type || !amount) {
      toast.warning("Please fill the form completely!!!")

    } else {
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
      try {
        const result = await addTransactionAPI(reqBody,reqHeader);
        console.log(result);
        if (result.status == 200) {
          setAddResponse(result)
          // toast.success(`New ${result.data.type} has added successfully`)
          handleClose()


        } else {
          toast.warning(result.response.data)
        }
      }  catch (err) {
        console.log(err);
      }
  
    }
  }
}

const handleClick = () =>{
  handleSubmit();
  // totalIncome();
}
// const totalBalance = transactionDetails.reduce((acc, transaction) => acc + transaction.amount, 0);

  
    return (
      <>
        <button style={{ backgroundColor: 'black', color: 'white' }} onClick={handleShow} className='btn'><i className='fa-solid fa-plus me-1'></i>Add New </button>
       
        <Modal size='md' centered
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            {/* <Modal.Title>Add New Transaction</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>


            <h1 style={{ textAlign: 'center', color: 'orange' }} className='font-bold pb-4 text-xl'>Make New Transaction</h1>
            <div className='grid gap-4'>
              <select name='category' value={transactionDetails.category} onChange={(e) => setTransactionDetails({ ...transactionDetails, category: e.target.value })} className='form-control'>
                <option value="" disabled >Select category</option>
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
              <select name='type' value={transactionDetails.type} onChange={(e) => setTransactionDetails({ ...transactionDetails, type: e.target.value })} className='form-control'>
                <option value="" disabled >Select type</option>
                <option value="Investment" >Investment</option>

                <option value="Expense" >Expense</option>
                <option value="Savings" >Savings</option>
              </select>
              <div className='input-group'>
                <input value={transactionDetails.amount} onChange={(e) => setTransactionDetails({ ...transactionDetails, amount: e.target.value })} name='amount' type='number' placeholder='Amount' className='form-control'></input>
              </div>
              {/* <div className='input-group'>
                <input value={transactionDetails.date} onChange={(e) => setTransactionDetails({ ...transactionDetails, date: e.target.value })} name='date' type='date' placeholder='Date' className='form-control'></input>
              </div> */}
              <div className='submit-btn'>
                <button onClick={handleClose} style={{ backgroundColor: 'white', color: 'black' }} className='btn border py-2 mb-2   w-full mt-3'>Cancel</button>
                <button onClick={handleClick}   style={{ backgroundColor: 'orange' }} className='btn border py-2 text-white mt-3 mb-4 w-full'>Make Transaction</button>
              </div>
            </div>

            {/* <div className="mb-2">
                <input name='amount' type="text" className="form-control" placeholder='Amount'/>
              </div>
              <div className="mb-2">
              <input name='type' type="text" className="form-control" placeholder='Type' />
              </div>
              <div className='mb-2'>
                <select className='form-control'>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>

                </select>
              </div>
              <div className="mb-2">
              <input type="text" className="form-control" placeholder='Project Title'  />
              </div>
              <div className="mb-2">
              <input type="text" className="form-control" placeholder='Project Title'  />
              </div> */}



          </Modal.Body>

        </Modal>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />

      </>
    )
  }


  export default Add