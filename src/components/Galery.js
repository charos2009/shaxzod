import React from 'react'
import galery1 from '../rasm/galery1.png'
import galery2 from '../rasm/galery2.png'
import galery3 from '../rasm/galery3.png'
import galery4 from '../rasm/galery4.png'
import galery5 from '../rasm/galery5.png'
import galery6 from '../rasm/galery6.png'
import galery7 from '../rasm/galery7.png'


function Galery() {
    return (
        <div style={{marginTop:'70px'}} className='container'>
            <h1 className='galery'>Gallery</h1>
            <p className='galerypp'>We focus on ergonomics and meeting you where you work. 
                It's only a keystroke away.</p>
                <div className='galery111'>
                    <img className='galery-img2' src={galery1}/>
                    <img className='galery-img2' src={galery2}/>
                    <img className='galery-img3' src={galery3}/>
                    <img className='galery-img4' src={galery4}/>
                </div>
                <div className='galery222'>
                    <img className='galery-img5' src={galery5}/>
                    <img className='galery-img6' src={galery6}/>
                    <img  className='galery-img7' src={galery7}/>
                </div>
                <button className='see-more'>See More</button>
        </div>
    )
}

export default Galery
