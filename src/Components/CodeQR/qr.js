import React, { useState } from 'react'
import '././qr.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Qr = () => {
    // encodeURIComponent : hàm JS mã hóa sử dụng trong URL
    // API QR : https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}

    const [qrText , setQrText] = useState('')
    const [imgQr , setImgQr] = useState('')
    const [error , setError] = useState(false)

    const handleCreateQr = () => {
        if (qrText.length > 0) {
            setImgQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`)
            setError(false)
        } else {
            alert('Your is not Text or URL ? ')
            setError(true)
            setTimeout(() => setError(false) ,1000)
        }
    }

  return (
    <div className='container'>
        <input value={qrText} type='text' placeholder='Enter your text or URL...' onChange={(e) => setQrText(e.target.value)}
        className={error ? 'error' : null}
       
        />
        <div id='imgBox' className={imgQr ? 'show-img' : null}>
            {imgQr && <img  src={imgQr}  alt=''/>}
        </div>
        <button onClick={handleCreateQr}>Enter Create your QR</button>
        <div className='box_again'>
         <FontAwesomeIcon icon={faArrowLeft} /> 
         <Link to="/" className='Page_again'>Quay lại</Link>
         </div>
    </div>
  )
}

export default Qr
