import React, {Component} from 'react'
import Fextures from './getFixtures';
import loadingImage from '../../loading.svg';

import './fixtures.css'



const getData = (url) => 
  new Promise ((resolves, rejects) => {
    const api = url
    const key = '1735d9b8b8c9441bb51dde4ff09fa770'
    const request = new XMLHttpRequest ()
    request.open('GET', api)
    request.setRequestHeader('X-Auth-Token', key)
    request.onload = () => (request.status === 200) ?
      resolves(JSON.parse(request.response)) :
      rejects(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
  })


export default class Fixtures extends Component {
  constructor(props) {
      super(props)
      this.state = {
        fextures: [],
        filteredFixtures: [],
        loading: false
      }
      this.fixturesFilter = this.fixturesFilter.bind(this)
    }

  componentWillMount() {
    this.setState({loading: true})
      getData('https://api.football-data.org/v1/fixtures?timeFrame=n1').then(
          fextures => {
            this.setState({fextures, loading: false}) 
            this.setState({filteredFixtures: this.state.fextures.fixtures}) 
          }
        )
      }

  fixturesFilter(league) {
    this.setState({loading: true})
    if (league === 'All') {
      this.setState({filteredFixtures: this.state.fextures.fixtures})
    } else {
          this.setState({filteredFixtures: this.state.fextures.fixtures.filter(fixture => fixture._links.competition.href.slice(45) === league)})
    }
    this.setState({loading: false})
  console.log(this.state.filteredFixtures)
  }

  render() {
    const {fextures, filteredFixtures, loading} = this.state;
    return (
      <div className="fixtures">
        {(loading) ? 
          <div className="loading">
            <div>
              <img src={loadingImage} alt="loading"/>
              <p>Loading...</p> 
            </div>
          </div> :
            <Fextures filteredFixtures={filteredFixtures} 
                fixturesFilter={this.fixturesFilter}
                fixtures={fextures}/>
          }
      </div>
    )
  }
}