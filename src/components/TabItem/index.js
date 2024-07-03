// Write your code here
import './index.css'
const TabItem = props => {
  const {eachTab, initialTabsListTabId, switchToNextTab} = props
  const {tabId, displayText} = eachTab

  // let heading
  // let horLine

  // if (initialTabsListTabId === tabId) {
  //   heading = 'tab-heading tab-color'
  //   horLine = 'hr-color'
  // } else {
  //   heading = 'tab-heading'
  //   horLine = 'tab-hr'
  // }

  const heading =
    initialTabsListTabId === tabId
      ? 'tab-heading tab-head-color'
      : 'tab-heading'
  const horLine = initialTabsListTabId === tabId ? 'tab-hr hr-color' : 'tab-hr'

  const clickingOnTab = () => {
    switchToNextTab(tabId)
  }

  return (
    <li>
      
        <button className={heading} onClick={clickingOnTab}>
          {' '}
          {displayText}
        </button>
      
    </li>
  )
}

export default TabItem
