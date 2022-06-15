import React from 'react';
import {MdFavorite} from "react-icons/md";
import { useState } from 'react';

const Card = ({card})  => {
   const favListColor = [ {color:'#ddd'},  {color:'#F20'}]
   const btnColor = [ 
    {color:'#fff',fontWeight:700,backgroundColor:'#ada'}, 
    {color:'#fff',fontWeight:700,backgroundColor:'#8f8'}
]
   const [fav,setFav]  = useState(0);
   const fncFav = (e) => {
    setFav((fav === 0) ? 1 : 0) ; 
   }

    return (
        <li>
        <div className='img_set' style={{background:`url(${card.imgUrl}) no-repeat center / cover`}}></div>
        <dl>
           <dt>{card.title}</dt>
           <dd>{card.content}</dd>
        </dl>
        <div className='btns'>
           <label 
           htmlFor={card.checkName} 
           style={btnColor[fav]}>
            좋아요
            <MdFavorite style={favListColor[fav]} />
           </label>
           <a className='link' href={card.dataLink}>상세보기</a>
       </div>
     </li>
    );
};

export default Card;