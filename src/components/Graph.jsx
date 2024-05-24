import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart,ArcElement } from 'chart.js'
// import Label from './Label';
Chart.register(ArcElement);

// const totalExpenseColor = userTransaction.filter(transaction=>transaction.type === 'Expense').reduce((acc, transaction) => acc + transaction.amount, 0);

const config={

    data:{
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            borderRadius:30,
            spacing:10
          }]
    },
    options:{
        cutout:115
    }
  }

function Graph({userTransaction}) {
  // console.log(userTransaction);
  const totalBalance = userTransaction.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <>

    <div className='d-flex align-items-center justify-content-around mb-5 '>
    <div className='chart relative'>
              <Doughnut {...config}></Doughnut>
               <h3 className='mb-5 font-bold title'>Total
               <span className='block text-3xl text-emerald-400'>${totalBalance}</span></h3>
           </div>
           {/* <div className='flex flex-col py-10 gap-4 ms-5'>
             <Label></Label>
            </div> */}
           
    </div>
    </>
    // <div className='d-flex justify-content-between max-w-xs mx-auto'>
    //     <div className='item'>
    //         <div className='chart relative'>
    //           <Doughnut {...config}></Doughnut>
    //           <h3 className='mb-5 font-bold title'>Total
    //           <span className='block text-3xl text-emerald-400'>${0}</span></h3>
    //         </div>

            // <div className='flex flex-col py-10 gap-4'>
            //  <Label></Label>
            // </div>
    //     </div>
    // </div>
)
}

export default Graph