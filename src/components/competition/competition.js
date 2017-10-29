import React, {Component} from 'react'
import {Link} from 'react-router'
import scrollToElement from 'scroll-to-element'
import CompetitionList from './competition-list';
import LeagueTable from './league-table.js';
import TeamTable from './team-table.js';
import loadingImage from '../../loading.svg';
import arrowUp from '../../assets/up-arrow.svg';

import './competition.css'

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

export default class Competition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fextures: [],
      fexturesLeagues: new Set([]),
      table: [],
      team: [],
      teamDetailInfo: {},
      loading: false,
      loadingTeams: false,
      loadingTeamInfo: false,
      league: false,
      teamInfo: false,
      ifPageScroll: false
    }
      this.getLeagueTable = this.getLeagueTable.bind(this)
      this.getTeamInfo = this.getTeamInfo.bind(this)
      this.setTeamName = this.setTeamName.bind(this)
      this.scrollPageUp = this.scrollPageUp.bind(this)
  }



  componentWillMount() {
      this.setState({loading: true})
      getData('https://api.football-data.org/v1/competitions').then(
        competitions => {
          this.setState({competitions, loading: false})
          // console.log(competitions)
        }
      )
    }

   getLeagueTable(url) {
    this.setState({loadingTeams: true, league: true})
    getData(url).then(
        table => {
          this.setState({table, loadingTeams: false, teamInfo: false, ifPageScroll: true})
          scrollToElement('.league-name', {
              offset: 0,
              ease: 'in-out-quad',
              duration: 1500
          });
        }
      )
   }

   getTeamInfo(url) {
    this.setState({loadingTeamInfo: true, league: true})
    getData(url).then(
        team => {
          this.setState({team, loadingTeamInfo: false, teamInfo: true, ifPageScroll: true})
          scrollToElement('.team-name', {
              offset: 0,
              ease: 'in-out-quad',
              duration: 1500
          });
        }
      )
   }

   scrollPageUp() {
    scrollToElement('.competitions-background', {
              offset: 0,
              ease: 'in-out-quad',
              duration: 1500
          });
    this.setState({ifPageScroll: false})
   }


   setTeamName(teamDetailInfo) {
    console.log(teamDetailInfo)
    this.setState({teamDetailInfo})
   }

  render() {
    const {competitions, loading, table, team, loadingTeams, loadingTeamInfo, league, teamInfo, teamDetailInfo, ifPageScroll} = this.state;
    return (
      <div className="text-center competitions-background">
        <nav>
          <ul className="navigation text-center">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/fixtures">FIXTURES</Link></li>
            <li><Link to="competition">COMPETITION</Link></li>
          </ul>
        </nav>
        {(loading) ? 
          <div className="loading">
            <div>
              <img src={loadingImage} alt="loading"/>
              <p>Loading...</p> 
            </div>
          </div> :
        <CompetitionList getLeagueTable={this.getLeagueTable}
                        competitions={competitions}/>
        }
        {
            (loadingTeams) ? 
            <div className="loading">
              <div>
                <img src={loadingImage} alt="loading"/>
                <p>Loading...</p> 
              </div>
            </div> :
            (league) ? 
            <div>
              {
                (ifPageScroll) ?
                <div className="scroll-up" onClick={this.scrollPageUp}><img src={arrowUp} alt="scroll-up" /></div> :
                <div></div>
              }
              <hr className='line' />
              <h1 className="text-center league-name">{table.leagueCaption}</h1>
              <hr />
              <LeagueTable getTeamInfo={this.getTeamInfo}
                    setTeamName={this.setTeamName}
                    teams={table.standing}/></div> :
            <div></div>   
        }
        {
          (loadingTeamInfo) ?
          <div className="loading">
            <div>
              <img src={loadingImage} alt="loading"/>
              <p>Loading...</p> 
            </div>
          </div> :
          (teamInfo) ?
          <div>
          <hr className='line' />
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h1 className="text-center team-name">{teamDetailInfo.teamName}</h1>
                {
                  (teamDetailInfo.crestURI) ?
                  <img className="team-emblem" src={teamDetailInfo.crestURI} alt="team-emblem"/> :
                  <p>There is no emblem availible...</p>
                }
                
                <hr className="hr-small"/>
                <h3 className="statistic-header">Home statistic</h3>
                <div className="team-statistic">
                  <p>Goals scored: <strong>{teamDetailInfo.home.goals}</strong></p>
                  <p>Goals against: <strong>{teamDetailInfo.home.goalsAgainst}</strong></p>
                  <p>Wins: <strong>{teamDetailInfo.home.wins}</strong></p>
                  <p>Draws: <strong>{teamDetailInfo.home.draws}</strong></p>
                  <p>Losses: <strong>{teamDetailInfo.home.losses}</strong></p>
                </div>
                <hr className="hr-small"/>
                <div className="team-statistic">
                <h3 className="statistic-header">Away statistic</h3>
                  <p>Goals scored: <strong>{teamDetailInfo.away.goals}</strong></p>
                  <p>Goals against: <strong>{teamDetailInfo.away.goalsAgainst}</strong></p>
                  <p>Wins: <strong>{teamDetailInfo.away.wins}</strong></p>
                  <p>Draws: <strong>{teamDetailInfo.away.draws}</strong></p>
                  <p>Losses: <strong>{teamDetailInfo.away.losses}</strong></p>
                </div>
              </div>
              <div className="col-md-7 col-sm-7">
                {
                  (team.players.length) ?
                <TeamTable team={team.players}/> :
                <h2>Sorry, there is no information about this team...</h2>
                }
              </div>
              <div className="col-md-1 col-sm-1">
              </div>
            </div>
          </div> :
            <div></div>   
        }
      </div>
    )
  }
}