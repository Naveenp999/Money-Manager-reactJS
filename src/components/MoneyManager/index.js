import './index.css'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import {v4 as uuidv4} from 'uuid'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  titlechange = event => this.setState({title: event.target.value})

  amountchange = event => this.setState({amount: event.target.value})

  typechange = event => this.setState({type: event.target.value})

  deleteitem = ide => {
    const {transactionsList} = this.state
    const newArray = transactionsList.filter(element => element.id === ide)
    this.setState({transactionsList: newArray})
  }

  formsubmitted = event => {
    event.preventDefault()
    const {title, amount, type, transactionsList} = this.state
    const newuser = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    const newArray = [...transactionsList, newuser]
    this.setState({
      title: '',
      amount: '',
      type: transactionTypeOptions[0].displayText,
      transactionsList: newArray,
    })
  }

  getBEI = () => {
    const {transactionsList} = this.state
    let newbalance = 0
    let newexpenses = 0
    let newincome = 0
    transactionsList.forEach(element => {
      if (element.type === transactionTypeOptions[0].optionId) {
        newbalance += parseInt(element.amount)
        newincome += parseInt(element.amount)
      } else {
        newbalance -= parseInt(element.amount)
        newexpenses += parseInt(element.amount)
      }
    })
    return {balance: newbalance, income: newincome, expenses: newexpenses}
  }

  render() {
    const {title, amount, type, transactionsList} = this.state
    const {balance, expenses, income} = this.getBEI()
    return (
      <div className="transaction-bag">
        <div className="sub-transaction-bag">
          <div className="user-details-container">
            <h1 className="user-name">Hi,Richard</h1>
            <p className="description">Welcome back to your,Money Manager</p>
          </div>
          <div className="amount-container">
            {
              <MoneyDetails
                Balance={balance}
                Income={income}
                Expenses={expenses}
              />
            }
          </div>
          <div className="net-transaction">
            <div className="new-transaction">
              <form className="transaction-form" onSubmit={this.formsubmitted}>
                <h1 className="heading">Add Transaction</h1>
                <label className="sub-title" htmlFor="users">
                  TITLE
                </label>
                <input
                  className="user-input"
                  type="text"
                  id="users"
                  value={title}
                  onChange={this.titlechange}
                />
                <label className="sub-title" htmlFor="userss">
                  AMOUNT
                </label>
                <input
                  className="user-input"
                  type="text"
                  id="userss"
                  value={amount}
                  onChange={this.amountchange}
                />
                <label className="sub-title" htmlFor="usersss">
                  TYPE
                </label>
                <select
                  className="transactions-type user-input"
                  onChange={this.typechange}
                  value={type}
                >
                  {transactionTypeOptions.map(element => (
                    <option
                      className="transaction-type"
                      key={element.optionId}
                      value={element.optionId}
                    >
                      {element.displayText}
                    </option>
                  ))}
                </select>
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <div className="history-subcontainer">
                <h1 className="heading">History</h1>
                <ul className="history-bag">
                  <li className="history-headings">
                    <div className="table">
                      <p className="name">Title</p>
                      <p className="name">Amount</p>
                      <p className="name">Type</p>
                    </div>
                  </li>
                  {transactionsList.map(element => (
                    <TransactionItem
                      content={element}
                      key={element.id}
                      deleteit={this.deleteitem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
