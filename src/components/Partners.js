
// import React from 'react'
import logo1 from '../rasm/logo1.png'
import logo2 from '../rasm/logo2.png'
import logo3 from '../rasm/logo3.png'
import logo4 from '../rasm/logo4.png'
import logo5 from '../rasm/logo5.png'
import logo6 from '../rasm/logo6.png'
function Partners() {
    return (
        <div className="container">
            <h1 className='part'>Partners</h1>
            <p className='partpp'>
                We focus on ergonomics and meeting you where you work. 
                I's only a keystroke away.
            </p>
            <div className='oblogo'>
                <img src={logo1}/>
                <img src={logo2}/>
                <img src={logo3}/>
                <img src={logo4}/>
                <img src={logo5}/>
                <img src={logo6}/>
            </div>
            <button className='logobtn'>All Partners</button>
        </div>
    )
}

export default Partners
