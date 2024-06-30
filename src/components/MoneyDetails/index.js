import './index.css'

const MoneyDetails = props => {
  const {Balance, Income, Expenses} = props
  return (
    <>
      <div className="balance-container amount-subcontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="amount-icon"
        />
        <div className="text-container">
          <p className="text">Your Balance</p>
          <p
            className="amount-heading"
            data-testid="balanceAmount"
          >{`RS ${Balance}`}</p>
        </div>
      </div>
      <div className="income-container amount-subcontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="amount-icon"
        />
        <div className="text-container">
          <p className="text">Your Income</p>
          <p
            className="amount-heading"
            data-testid="incomeAmount"
          >{`RS ${Income}`}</p>
        </div>
      </div>
      <div className="expenses-container amount-subcontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="amount-icon"
        />
        <div className="text-container">
          <p className="text">Your Expenses</p>
          <p
            className="amount-heading"
            data-testid="expensesAmount"
          >{`RS ${Expenses}`}</p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
