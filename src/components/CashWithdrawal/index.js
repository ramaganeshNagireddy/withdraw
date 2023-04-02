// Write your code here
import {Component} from "react"
import "./index.css"
import DenominationsItem from '../DenominationsItem'

class CashWithdrawal extends Component{
    const {denominationsList}=props
    state={amount:2000}
    updateAmount=(value)=>{
        this.setState((pre)=>({amount:pre.amount-value}))
    }
    render(){
        const {amount}=this.state
        return(
            <div className="bg-container">
                <div className="sub-container">
                    <div className="img-container">
                        <div className="logo">
                            <h1>S</h1>
                        </div>
                        <h1 className="name">Sarah Williams</h1>

                    </div>
                    <div className="balance">
                        <h1 >Your Balance</h1>
                        <div className="rup">
                            <h1 className="amount">{amount}</h1>
                            <p >in rupees</p>
                        </div>

                    </div>
                    <h1 className="name">Withdraw</h1>
                    <p>CHOOSE SOME (IN RUPEES)</p>
                    <div>
                        denominationsList.map((each)=>{
                            <DenominationsItem details={each} id={each.id} updateAmount={this.updateAmount}/>
                            })
                    <div/>
                <div/>

            </div>
        )
    }
}

export default CashWithdrawal