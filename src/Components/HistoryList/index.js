import './index.css'

const HistoryList = props => {
  const {data, deleteFunction} = props
  const {timeAccessed, logoUrl, id, title, domainUrl} = data

  const itemClicked = () => {
    deleteFunction(id)
  }

  return (
    <li className="list-items">
      <p className="date">{timeAccessed}</p>
      <div className="history-icon-card">
        <div className="details">
          <img src={logoUrl} className="site-icon" alt="domain logo" />
          <h5>{title}</h5>
          <p>{domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="delete"
          onClick={itemClicked}
          aria-label="Delete history item"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
