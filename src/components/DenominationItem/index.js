// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickUpdate = () => {
    updateBalance(value)
  }

  return (
    <li className="list-container">
      <button type="button" className="btn" onClick={onClickUpdate}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
