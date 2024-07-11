import {Component} from 'react'
import HistoryList from '../HistoryList'
import './index.css'

class History extends Component {
  state = {searchInput: '', historyList: this.props.initialHistoryList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistoryItem = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(item => item.id !== id)
    this.setState({historyList: updatedHistoryList})
  }

  render() {
    const {searchInput, historyList} = this.state

    const filteredHistoryList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="history-container">
        <div className="history-input-card">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="search-container">
            <button type="button" className="search-icon1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-icon"
                alt="search"
              />
            </button>
            <input
              className="input-card"
              type="search"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="history-list">
          {filteredHistoryList.length > 0 ? (
            <ul>
              {filteredHistoryList.map(eachItem => (
                <HistoryList
                  data={eachItem}
                  key={eachItem.title}
                  deleteFunction={this.onDeleteHistoryItem}
                />
              ))}
            </ul>
          ) : (
            <p className="no-items">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default History
