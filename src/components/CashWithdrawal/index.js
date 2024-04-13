// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onWithdraw = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="main-bg-container">
        <div className="withdrawal-container">
          <div className="customer-name-container">
            <p className="profile-dp">{initial}</p>
            <h1 className="customer-name">{name}</h1>
          </div>
          <div className="your-balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  eachDenomination={eachItem}
                  key={eachItem.id}
                  onWithdraw={this.onWithdraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
