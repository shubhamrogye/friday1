import React from 'react'
import './gallery.css'
import Img1 from '../../images/potrait-1.jpg'
import Img2 from '../../images/2.jpg'
import Img3 from '../../images/3.jpg'
import Img4 from '../../images/4.jpg'
import Img5 from '../../images/5.jpg'



const Gallery = () => {

    let data=[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img2,
        },
        {
            id:3,
            imgSrc:Img3,
        },
        {
            id:4,
            imgSrc:Img4,
        },
        {
            id:5,
            imgSrc:Img5,
        },
        // {
        //     id:6,
        //     imgSrc:Img5,
        // },
    ]

    return (
        <>
           <div class="section-title" id='potrait'>
            <span>Our Portfolio</span>
             <h2>Our Portfolio</h2>
            
         </div>
           <div className='gallery'>
               {data.map((item,index) =>{
                   return(
                       <div className='pics' key={index}>
                           <img  className='gal' src={item.imgSrc} alt='potraits'/ >
                       </div>    
                   )
               })}
           </div>
        </>
    )
}

export default Gallery
