import React, { useState } from 'react'
import '../../App.css'

import Again from '../../Components/ComeHome/Again';
const ViewAndHide = () => {
    const [isExpand , setIsexpend] = useState(true)

    const handleMoreAndHide = () => {
        setIsexpend(!isExpand)
    }

  return (
    <div className='container_body'>
     
       <div className='box_Content'>
    
            <p className='title_content'>
                {isExpand ? (` Trăng đêm nay đẹp và sáng quá! Đêm nay là trăng rằm 
            tháng tám cơ mà! Cái bóng dáng tròn vành vạnh của mặt trăng trông giống như cái 
            đĩa bạc khổng lồ treo lơ lửng trên nền trời xanh thẳm. Trăng lấp ló lờ mờ ẩn hiện
             sau ngọn phi lao. Làng xóm tưng bừng tiếng cười nói râm ran. Ánh trăng vằng vặc
              soi sáng từng cảnh vật.`) : (`  Trăng đêm nay đẹp và sáng quá! Đêm nay là trăng rằm 
            tháng tám cơ mà! Cái bóng dáng tròn vành vạnh của mặt trăng trông giống như cái 
            đĩa bạc khổng lồ treo lơ lửng trên nền trời xanh thẳm. Trăng lấp ló lờ mờ ẩn hiện
             sau ngọn phi lao. Làng xóm tưng bừng tiếng cười nói râm ran. Ánh trăng vằng vặc
              soi sáng từng cảnh vật. Gió thổi nhè nhẹ lướt qua như đang thì thầm trò chuyện. 
              Ngoài vườn, gió luồn qua từng kẽ lá hiu hiu thổi mát, hòa thành một bản nhạc du dương,
               thích thú làm sao? Tôi và mấy đứa bạn trong xóm tụm năm, tụm bảy rủ nhau xếp thành hàng 
               dọc rồng rắn đi rước đèn phá cỗ đêm rằm Trung thu. Những chiếc đèn giấy ông sao, đèn cá chép
               ... với ánh lửa bập bùng hòa với ánh trăng làm một. Chơi chán, chúng tôi cùng nhau phá cỗ. 
               Trong mâm cỗ có cả phần của Chị Hằng và Chú Cuội. Có lúc ngước nhìn lên, tôi cảm giác như 
               họ đang tươi cười với chúng tôi, rồi nhón tay cầm lấy một cái kẹo mà tôi để phần cho họ.`)}
          </p>
              <div className='box_btn'>
              <button className='btn_content' onClick={handleMoreAndHide}>
                {isExpand ? 'Xem thêm' : 'Thu Bớt'}
              </button>
              </div>
              <Again/>
       </div>
      
    </div>
  )
}

export default ViewAndHide
