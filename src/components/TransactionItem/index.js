import './index.css'

const TransactionItem = props => {
  const {content, deleteit} = props
  const {id, title, amount, type} = content
  console.log(id)
  const deletethis = () => deleteit(id)
  return (
    <li className="history-headings">
      <div className="table">
        <p className="name">{title}</p>
        <p className="name">{amount}</p>
        <p className="name">{type}</p>
        <button
          className="image-container"
          onClick={deletethis}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
