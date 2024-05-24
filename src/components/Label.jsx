import React from 'react'

const obj = [
    {
      type:'Expense',
      color:'rgb(255, 99, 132)'
      
    },
    {
        type:'Savings',
          color:'#f9c74f'
      },
      {
        type:'Investment',
          color:'rgb(54, 162, 235)'
      }

]
function Label({userTransaction}) {
  console.log(userTransaction);
      const totalSavings = userTransaction.filter(transaction=>transaction.type === 'Savings').reduce((acc, transaction) => acc + transaction.amount, 0);
      const totalExpense = userTransaction.filter(transaction=>transaction.type === 'Expense').reduce((acc, transaction) => acc + transaction.amount, 0);
      const totalInvestment = userTransaction.filter(transaction=>transaction.type === 'Investment').reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <>
      <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{backgroundColor:'rgb(255, 99, 132)'}}>  </div>
                <h3 className='text-md'>Expense {}</h3>
            </div>
            <h3 className='font-bold ms-4'>{totalExpense}</h3>
        </div>
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{backgroundColor:'#f9c74f'}}>  </div>
                <h3 className='text-md'>Savings</h3>
            </div>
            <h3 className='font-bold ms-4'>{totalSavings}</h3>
        </div>
    

        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{backgroundColor:'rgb(54, 162, 235)'}}>  </div>
                <h3 className='text-md'>Investment {}</h3>
            </div>
            <h3 className='font-bold ms-4'>{totalInvestment}</h3>
        </div>
    
    {/* {obj.map((v,i)=>
        <LabelComponent key={i} data={v}></LabelComponent>
    )}  */}

    </>
  )
}

// function LabelComponent({data}){
//     if(!data) return <></>;
//     // const totalSavings = userTransaction.filter(transaction=>transaction.type === 'savings').reduce((acc, transaction) => acc + transaction.amount, 0);

//     return(
//       // const totalSavings = userTransaction.filter(transaction=>transaction.type === 'savings').reduce((acc, transaction) => acc + transaction.amount, 0);

        // <div className='labels flex justify-between'>
        //     <div className='flex gap-2'>
        //         <div className='w-2 h-2 rounded py-3' style={{background:data.color??'#f9c74f'}}></div>
        //         <h3 className='text-md'>{data.type??''}</h3>
        //     </div>
        //     <h3 className='font-bold'>{}</h3>
        // </div>
//     )
// }

export default Label