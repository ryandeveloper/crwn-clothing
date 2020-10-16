import React from 'react';
import './menu-item.styles.scss';

// key={id} 
// title={title} 
// imageurl={imageUrl} 
// size={size} 
// linkurl={linkUrl} 

const MenuItem = ({ title, imageurl, size, linkurl  }) => (
   <div className={`${size} menu-item`}>

      <div className='background-image' style={{ backgroundImage: `url(${imageurl})`}} />
      
      <div className="content">
         <h1 className="title">{ title.toUpperCase() }</h1>
         <span className="subtitle">SHOP NOW</span>
      </div>
   </div>
);

export default MenuItem;