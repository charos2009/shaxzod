import rasm2 from '../rasm/rasm2.png'
import icon1 from '../rasm/icon1.png'
import icon2 from '../rasm/icon2.png'
import icon3 from '../rasm/icon3.png'
function Featurehome(){
    return(
        <div className='container'>
            <div className='futr'>
            <h1 className='feature'>FEATURES</h1>
            <p className='mosts'>Most calendars are designed for teams. Slate is designed for 
                freelancers who want a simple way to plan their schedule.</p>

                <img className='imgs' src={rasm2}/>
                <div  className='venop'>
                    <div className='venop1'>
                    <img src= {icon1}/>
                    <h3>A single source 
                        of truth</h3>
                        <p className='ven1'>    
                            When you add work to your 
                            Slate calendar we automatically 
                            calculate useful insights 

                        </p>
                    </div>
                    <div className='venop2'>
                    <img src={icon2}/>
                    <h3>
                        Intuitive 
                        interface
                    </h3>
                    <p className='ven2'>When you add work to your 
                        Slate calendar we automatically 
                        calculate useful insights 
                    </p>
                    </div>
                    <div className='venop3'>
                        <img src={icon3}/>
                    <h3>
                        Or with rules
                    </h3>
                    <p className='ven3'>When you add work to your 
                        Slate calendar we automatically 
                        calculate useful insights 
                    </p>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Featurehome;

