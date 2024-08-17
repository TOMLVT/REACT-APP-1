import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const ChangeImage = () => {
     const ImgArray = [
        "https://i.pinimg.com/736x/d6/b0/27/d6b0274c362ec75eb932513f57dc0cc4.jpg",
        "https://cdn.globalso.com/ajzclothing/Custom-T-shirt-polo-10.jpg",
        "https://image.made-in-china.com/202f0j00sHgUJkZdSMqL/100-Cotton-Fashion-Mens-Polo-Shirt-with-Customize-Logo.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGkRXHJPGU-l15w_qdPpnn5rUnlb8PjHI60ozXy1gUr-gpn7qzGo4uRbj3RWQwiLTswM&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-9wuKcNccXCHDKkCVVV7U5l-T_z48QXGVNb1FRY7dRNTL3fJpbDtJbyojf9eCkcCUS4&usqp=CAU",
     ]

     const [img , setImage] = useState(ImgArray[0])
  return (
    <div className='container_body'>
     <div className='box_again'>
         <FontAwesomeIcon icon={faArrowLeft} /> 
         <Link to="/" className='Page_again'>Quay lại</Link>
         </div>
       <div className='big_img'>
       <div className='body_main_img'>
                <img src={img} alt='' className='img_mains'/>
        </div>
        <ul className='ul_img'>
            {ImgArray.map((item , index) => (
                  <li key={index} className='li_img'>
                    <img src={item} onClick={() => setImage(item)} alt=''/>
                  </li>
            ))}
        </ul>
       </div>
      
    </div>
  )
}

export default ChangeImage
