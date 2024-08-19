import React, { useState } from 'react'
import '../../App.css'
const SelectProduct = () => {
    const [select , setSelect] = useState('Thời trang')
  return (
    <div className='container_body'>
     <div className='box_select_product'>
            <select value={select} onChange={(e) => setSelect(e.target.value)}>
                <option value='Thời trang'>Thời trang</option>
                <option value='Vật tư'>Vật tư</option>
                <option value='Đồ gia dụng'>Đồ gia dụng</option>
                <option value='Hàng Giảm giá'>Hàng Giảm giá</option>
            </select>
     </div>
     <div className='select_text_sm'>
            {select}
     </div>
    </div>
  )
}

export default SelectProduct
