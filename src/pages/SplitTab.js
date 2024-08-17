import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const SplitTab = () => {
        const [tab , setTab] = useState(1)
  return (
    <div className='container_body'>
         <div className='all_tab_content'>
         <div className='box_tab'>
                <button className={`button tab ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>Mục 1</button>
                <button className={`button tab ${tab === 2 ? 'active' : ''}`} onClick={() => setTab(2)}>Mục 2</button>
                <button className={`button tab ${tab === 3 ? 'active' : ''}`} onClick={() => setTab(3)}>Mục 3</button>
                <button className={`button tab ${tab === 4 ? 'active' : ''}`} onClick={() => setTab(4)}>Mục 4</button>
           </div>

           <div className='body_toggle_tab active'>
           <div className={`tab_content ${tab === 1 ? 'active' : ''}`}>
                Nội dung mục 1
            </div>
            <div className={`tab_content ${tab === 2 ? 'active' : ''}`}>
                Nội dung mục 2
            </div>
            <div className={`tab_content ${tab === 3 ? 'active' : ''}`}>
                Nội dung mục 3
            </div>
            <div className={`tab_content ${tab === 4 ? 'active' : ''}`}>
                Nội dung mục 4
            </div>
           </div>
         <div className='box_again'>
         <FontAwesomeIcon icon={faArrowLeft} /> 
         <Link to="/" className='Page_again'>Quay lại</Link>
         </div>
         </div>
    </div>
  )
}

export default SplitTab
