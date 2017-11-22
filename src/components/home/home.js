import React, {Component} from 'react'
import {Link} from 'react-router'
import footballIcon from '../../assets/soccer.svg'
import tableIcon from '../../assets/table.svg'
import playerIcon from '../../assets/player.svg'

import './home.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="shadow">
            <nav>
              <div className="container">
                <div>
                  <ul className="navigation">
                    <li><Link to={process.env.PUBLIC_URL + '/'}>HOME</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/fixtures'}>FIXTURES</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/competition'}>COMPETITION</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="container">
              <h1 className="display-3">Football App 2.0</h1>
              <p className="lead">Latest fixtures, league tables, information about players in major worlds leagues</p>
              <Link to={process.env.PUBLIC_URL + '/fixtures'}><button className="btn btn-success">Get competition</button></Link>
              <Link to={process.env.PUBLIC_URL + '/competition'}><button className="btn btn-success">Get fixtures</button></Link>
            </div>
          </div>
        </div>
        <div className="container app-info">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <img src={footballIcon} alt="fotball-icon"/>
              <h3>Latest fixtures</h3>
              <p>Information about all football matches that playing today in major football leagues. Time of beginings of the games and game scores.</p>
            </div>
            <div className="col-md-4 col-sm-4">
              <img src={tableIcon} alt="table-icon"/>
              <h3>League tables</h3>
              <p>Information about team position, playing games, scored goals and points in major football leagues.</p>
            </div>
            <div className="col-md-4 col-sm-4">
              <img src={playerIcon} alt="player-icon"/>
              <h3>Team information</h3>
              <p>Information about names, position, date of birth, nationality of every player in each team in major football leagues.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}