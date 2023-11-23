import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import "./Success.scss"

const Success = () => {

    const navigate = useNavigate()
    const authItemData = useSelector((state) => state.authItem.authItemData)
    const closeReg = useSelector((state) => state.auth.closeReg)
    
  return (
    authItemData.map(({id, active, color, backImg}) => {
        if(active){
            return (
                <div className='success' key={id} style={{display: closeReg?"flex":"none"}}>
                    <div className='text-side' >
                        <h2>Շնորհավորում ենք</h2>
                        <h1 style={{color}}>Ձեր հայտը</h1 >
                        <h3>հաջողությամբ ընդունվեց:</h3>
                        <p>Մեր մասնագետները դիտարկում են
                        հայտը և կապ կհաստատեն Ձեր
                        թողած կոնտակտներով:</p>
                        <div className='back-to-home' style={{backgroundColor: color}} onClick={() => {
                            navigate("/")
                        }}>
                            <p>Վերադառնալ գլխավոր էջ</p>
                        </div>
                    </div>
                    <div className='image-side'>
                        <img src={backImg} alt="" />
                    </div>
                </div>
            )
        } else {
            return null
        }
    })
  )
}

export default Success;



























// import React from 'react'
// import { Navigate } from 'react-router'
// import "./SuccessStudent.scss"

// const SuccessStudent = () => {


//   return (
//     <div className='success-student'>
//         <div className='text-side'>
//             <h2>Շնորհավորում ենք</h2>
//             <h1>Ձեր հայտը</h1>
//             <h3>հաջողությամբ ընդունվեց:</h3>
//             <p>Մեր մասնագետները դիտարկում են
//             հայտը և կապ կհաստատեն Ձեր
//             թողած կոնտակտներով:</p>
//             <div className='back-to-home' onClick={() => {
//                 Navigate("/")

//             }}>
//                 <p>Վերադառնալ գլխավոր էջ</p>
//             </div>
//         </div>
//         <div className='image-side'></div>
//     </div>
//   )
// }

// export default SuccessStudent