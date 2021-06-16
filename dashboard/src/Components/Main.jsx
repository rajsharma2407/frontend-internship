import logo from './img1.png';
import logo2 from './img2.png';

export default () => {
    return(
        <>
        <div style={{padding:"0 20px", display:"flex", justifyContent:"space-around", flexWrap:'wrap'}} className ="mainSection">
            <div>
                <div>
                    <div style={{display:"flex"}}>
                        <h2 style={{marginRight:"20px"}}>Total Profit</h2><span>september 2020</span>
                    </div>
                </div>
                <img src={logo} alt="Image" height="200" width="300"/>
            </div>

            <div>
                <div>
                    <h2>Expenses</h2>
                </div>
                <img src={logo2} alt="" />
            </div>
        </div>
        </>
    )
}
