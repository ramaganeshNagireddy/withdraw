// Write your code here
import './index.css'

const DenominationsItem = props => {
  const {details, updateAmount} = props
  const {value} = details
  const withdraw = () => {
    updateAmount(value)
  }
  return (
    <button className="btn" onClick={withdraw}>
      {value}
    </button>
  )
}
export default DenominationsItem
