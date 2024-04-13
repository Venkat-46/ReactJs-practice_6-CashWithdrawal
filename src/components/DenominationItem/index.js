// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachDenomination, onWithdraw, key} = props
  const {id, value} = eachDenomination
  const deductAmount = () => {
    onWithdraw(value)
  }
  return (
    <li className="list-item">
      <button type="button" className="button" onClick={deductAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
