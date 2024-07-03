// Write your code here
import './index.css'

const AppItem = props => {
  const {eachList, initialAppsListCategory} = props
  const {appId, appName, imageUrl, category} = eachList

  const addImageandPara = (initialAppsListCategory, category) => {
    if (initialAppsListCategory === category) {
      return (
        <li className="image-container">
          <img src={imageUrl} alt={appName} />
          <p>{appName}</p>
        </li>
      )
    }
  }

  return <li>{addImageandPara(initialAppsListCategory, category)}</li>
}

export default AppItem
