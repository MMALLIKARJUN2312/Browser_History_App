import './index.css'

const BrowserHistoryItem = props => {
  const {historyItemDetails, deleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItemDetails

  const onDeleteHistory = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item-container">
      <div className="history-details-container">
        <p className="time">{timeAccessed}</p>
        <div className="app-details">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
          <div className="button-container">
            <button
              type="button"
              data-testid="delete"
              className="delete-button"
              onClick={onDeleteHistory}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
