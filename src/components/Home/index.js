import {Component} from 'react'
import {Puff} from 'react-loader-spinner'
import ProfileCard from '../ProfileCard'

import './index.css'

class Home extends Component {
  state = {
    apiStatus: 'INITIAL',
    profileList: [],
  }

  componentDidMount() {
    this.getProfiles()
  }

  getProfiles = async () => {
    this.setState({apiStatus: 'LOADING'})
    const url = 'https://jsonplaceholder.typicode.com/users'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({profileList: data, apiStatus: 'SUCCESS'})
    }
  }

  renderHome() {
    const {profileList} = this.state
    return (
      <ul>
        {profileList.map(eachProfile => (
          <ProfileCard key={eachProfile.id} profile={eachProfile} />
        ))}
      </ul>
    )
  }

  render() {
    const {apiStatus} = this.state
    return (
      <div className="main-bg-container">
        {apiStatus === 'LOADING' ? (
          <div>
            <Puff color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          this.renderHome()
        )}
      </div>
    )
  }
}

export default Home
