import img3 from './img3.png'
export default () => {
    const myFunc = (e) =>{
        document.getElementById("file").click();
    }
    return (
        <>
        <div style={{margin:"10px", display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
            <div>
                <div style={{padding:"10px"}}>
                    <div style={{display:"flex"}}>
                        <h2 style={{marginRight:"20px"}}>Invoices</h2>
                        <span style={{marginTop:"10px"}}>recently created</span>
                    </div>
                </div>

                <div style={{display:"flex"}} className="footer">
                    <div className="dropbox" onClick={myFunc} style={{position:"relative"}}>
                        <input type="file" name="" id="file" style={{display:"none"}}/>
                        <i class="fa fa-cloud-upload-alt fa-3x"></i>
                        <span style={{position:"absolute",left:"50%",bottom:"35px",transform:"translateX(-50%)",fontSize:"10px"}}>upload invoice</span>
                    </div>
                    <div className="clr">
                        <div style={{height:"40%", borderLeft:"2px solid yellow", paddingLeft:"10px"}}>
                            <span>#00106</span><br />
                            <h4>Mindtickle</h4>
                            <span >2 Sep, 2020</span>
                        </div>
                        <div style={{borderTop:"1px solid gray", position:"absolute", bottom:"5px"}}>
                            <span>Viewed </span><span>$3,500</span>
                        </div>
                    </div>
                    <div className="clr">
                        <div style={{height:"40%", borderLeft:"2px solid green", paddingLeft:"10px"}}>
                            <span>#00105</span><br />
                            <h4>Cleancloud</h4>
                            <span >1 Sep, 2020</span>
                        </div>
                        <div style={{borderTop:"1px solid gray", position:"absolute", bottom:"5px"}}>
                            <span>sent </span><span>$2000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footerImg" style={{}}>
                <img src={img3} alt="image"/>
            </div>
            <div></div>
            <div></div>
        </div>
        </>
    )
}
