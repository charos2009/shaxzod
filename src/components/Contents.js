
// import React from 'react'
import card1 from '../rasm/card2.png'
import card2 from '../rasm/bbb.png' 
function Content() {
    return (
        <div className='contentdiv'>
        <div>
            <h1 className='content'>Contents</h1>
            <p className='contentpp'>We focus on ergonomics and meeting you where you work. 
                It's only a keystroke away.</p>
                <div className='obcard'>
                    <div className='card1'>
                        <h3 className='work1'>Work</h3>
                        <p className='ever'>Ever wondered if you're too reliant 
                            on a client for work? Slate helps 
                            you identify .</p>
                           
                            <button className='card1-btn'>Sign Up</button>
                             <img className='cardimg1' src={card1}/>
                    </div>
                    <div className='card2'>
                        <h3 className='work1'>Design with real data</h3>
                        <p className='ever'>Ever wondered if you're too reliant 
                            on a client for work? Slate helps 
                            you identify .</p>
                            <button className='card2-btn'>Try For Free</button>
                            <img className='cardimg2' src={card2}/>

                    </div>
                </div>
        </div>
        </div>
    )
}

export default Content;
