export default () => {
    var overdues = "12,015";
    var outstanding = "33,363";
    var draft = "4,500";
    const invoices = {
        flex:1,
        padding:"10px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        marginBottom:"30px"
    }
    const innerInvoice = {
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"
    };
    const mainStyle = {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"25px",
        flexWrap:"wrap"
    }
    const filter = {
        margin:"5px 0",
        height:"20px",
        width:"100%",
        background:"lightgray",
        borderRadius:"10px"
    }
    const outstanding2 = {
        flex:1
    }
    const filterAmount={
        background:"black",
        width:"40%",
        height:"100%"
    }
    return(
        <>
            <div style={mainStyle}>

                <div style={invoices} className="invoices">
                    <p>Invoices</p>
                    <div style={innerInvoice}>
                        <div>
                            <h3>${overdues}</h3>
                            <span>Overdue</span>
                        </div>
                        <div>
                            <h3>${outstanding}</h3>
                            <span>Total Outstanding</span>
                        </div>
                        <div>
                            <h3>${draft}</h3>
                            <span>In draft</span>
                        </div>
                    </div>
                </div>

                <div style={outstanding2}>
                    <p>Outstanding revenue</p>
                    <div style={{display:"flex" }}>
                        <div style={{flex:2}}>
                            <div style={filter}>
                                <div style={filterAmount}>x</div>
                            </div>
                        </div>
                        <h3 style={{flex:1}}>$23.1k</h3>
                        <i className="fas fa-search"></i>
                    </div>
                    <span>$12,095 Overdue</span>
                </div>
            </div>
        </>
    )
}
