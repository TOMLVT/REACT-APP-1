import React, { useState } from 'react';
import '../App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function App() {
  const [leftItems, setLeftItems] = useState([
    'List item 1',
    'List item 2',
    'List item 3',
    'List item 4'
  ]);
  const [rightItems, setRightItems] = useState([]);

  const handleDragStart = (e, item, fromLeft) => {
    e.dataTransfer.setData('item', item);
    e.dataTransfer.setData('fromLeft', fromLeft);
  };

  const handleDrop = (e, isRightBox) => {
    const item = e.dataTransfer.getData('item');
    const fromLeft = e.dataTransfer.getData('fromLeft') === 'true';

    if (isRightBox && fromLeft) {
      setLeftItems(leftItems.filter(i => i !== item));
      setRightItems([...rightItems, item]);
    } else if (!isRightBox && !fromLeft) {
      setRightItems(rightItems.filter(i => i !== item));
      setLeftItems([...leftItems, item]);
    }
  };

  return (
    <div className="container_body_drag">

     <div className='box_again'>
         <FontAwesomeIcon icon={faArrowLeft} color='white'/> 
         <Link to="/" className='Page_again' style={{color: 'white'}}>Quay lại</Link>
         </div>

      <div id="left" onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, false)}>
        {leftItems.map((item, index) => (
          <div
            key={index}
            className="list"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, item, true)}> {item}

          </div>
        ))}
      </div>



      <div id="right" onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e, true)} >
        {rightItems.map((item, index) => (
          <div
            key={index}
            className="list"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, item, false)}>
            {item}
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default App;
