
// import React from 'react'
import tab from '../rasm/avatar.png'
import tab2 from '../rasm/avatar (1).png'
import tab3 from '../rasm/avatar (2).png'
import tab4 from '../rasm/avatar (3).png'
function Testimonials() {
    return (
        <div className='container'>
            <h1 className='test'>Testimonials</h1>
            <div className="chi1">
                <div className="ch111">
                    <div style={{display:'flex'}}>
                    <img style={{marginTop:'-15px'}}  src={tab}/>
                    <h3 className="chh2">
                        Claire Bell
                        Designer
                    </h3>
                    </div>
                    <p>Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year.your financial 
                        goal for the month and year.</p>
                </div>

                <div className="ch222">
                    <div style={{display:'flex'}}>
                        <img style={{marginTop:'-15px'}}  src={tab2} />
                    <h3 className="chh2">Francisco Lane
                                        Designer</h3>
                                        </div>
                    <p>
                    Slate helps you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year. Slate helps 
                    you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year.your financial 
                    goal for the month and year.
                    </p>
                </div>
            </div>

            <div className="chi2">
                <div className="ch333">
                    <div style={{display:'flex'}}>
                      <img style={{marginTop:'-15px'}}  src={tab3} />  
                    <h3 className="chh2">
                        Ralph Fisher
                            Designer
                    </h3>
                    </div>
                    <p>
                    Slate helps you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year. Slate helps 
                    you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year.your financial 
                    goal for the month and year.
                    </p>
                </div>
                <div className="ch444">

                <div style={{display:'flex'}}>
                <img style={{marginTop:'-15px'}}  src={tab4} />
                    <h3 className="chh2">Jorge Murphy
                                        Designer</h3>
                    </div>
                    <p>Slate helps you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year. Slate helps 
                    you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year.your financial 
                    goal for the month and year.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Testimonials
