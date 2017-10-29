import React, { Component } from 'react';

import CompetitionList from './competition-list';
import Fextures from './fextures';
import LeagueTable from './league-table.js';
import loadingImage from './loading.svg';
import './App.css';


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


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      competitions: [],
      fextures: [],
      fexturesLeagues: new Set([]),
      table: [],
      loading: false,
      fexturesIn: false,
      loadingTeams: false,
      league: false
    }
    this.getFextures = this.getFextures.bind(this)
    this.getLeagueTable = this.getLeagueTable.bind(this)
  }

  componentWillMount() {
    this.setState({loading: true, fexturesIn: false})
    getData('https://api.football-data.org/v1/competitions').then(
      competitions => {
        this.setState({competitions, loading: false})
        console.log(competitions)
      }
    )
  }


   getFextures() {
    this.setState({loading: true, fexturesIn: true})
    getData('https://api.football-data.org/v1/fixtures?timeFrame=n1').then(
        fextures => {
          this.setState({fextures, loading: false})  
        }
      )
   }

   getLeagueTable(url) {
    this.setState({loadingTeams: true, league: true})
    getData(url).then(
        table => {
          this.setState({table, loadingTeams: false})
          console.log(table)
        }
      )
   }

  render() {
    const { competitions, fextures, loading, loadingTeams, fexturesIn, table, league } = this.state
    return (
      <div className="main">
      <nav>
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="#">Football App</a>
          </div>
          <div>
            <ul className="navigation">
              <li><a>Home</a></li>
              <li><a>Fixtures</a></li>
              <li><a>Competition</a></li>
            </ul>
          </div>
        </div>
      </nav>

        <div className="jumbotron jumbotron-fluid text-center">
          <div className="shadow">
            <div className="container">
              <h1 className="display-3">Football App 2.0</h1>
              <p className="lead">Chose one of the football league to see latest leagues tables.</p>
              <p className="lead">Or press the button to see latest fixtures</p>
              <button onClick={this.getFextures}
                      className="btn btn-success">Get fixtures</button>
            </div>
          </div>
        </div>
        {(loading) ? 
          <div className="loading">
            <div>
              <img src={loadingImage} />
              <p>Loading...</p> 
            </div>
          </div> :
            (fexturesIn) ?
            <Fextures fextures={fextures}/> :
            <CompetitionList getLeagueTable={this.getLeagueTable}
                        competitions={competitions}/>       
        }
        {
            (loadingTeams) ? 
            <div className="loading">
              <div>
                <img src={loadingImage} />
                <p>Loading...</p> 
              </div>
            </div> :
            (league) ? 
            <div>
              <hr className='line' />
              <h1 className="text-center">{table.leagueCaption}</h1>
              <LeagueTable teams={table.standing}/></div> :
            <div></div>   
        }
      </div>
    );
  }
}

export default App;
