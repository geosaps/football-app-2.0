import React, {Component} from 'react';

export default class Feaxture extends Component {
  render() {
    const {date, home, homeGoals, awayGoals, away, status} = this.props
    const cestDate = date.split(":").map((date, i) => (i === 0) ? ((date < 22) ? date = Number(date) + 2 : date = Number(date) + 2 - 24) : date).join(":")
    return (
      <a className={"list-group-item fixture " + 
          (status === 'FINISHED' ? "finished" : 
          (status === "IN_PLAY" ? "in-play" : "timed"))}>
        <div className="row">
          <div className="hidden-lg hidden-md hidden-sm col-xs-12">
            {cestDate}
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 col-sm-1 hidden-xs fixture-time">
            {cestDate}
          </div>
          <div className={"col-md-4 col-xs-4 " + 
            (status === 'FINISHED' && 
              (homeGoals > awayGoals ? "winner" : 
              (homeGoals === awayGoals ? "draw" : "looser")))}>
            {home}
          </div>
          <div className={"col-md-1 col-xs-1 " + 
            (status === 'FINISHED' && 
              (homeGoals > awayGoals ? "winner" : 
              (homeGoals === awayGoals ? "draw" : "looser")))}>
            {homeGoals}
          </div>
          <div className="col-md-1 col-xs-1">
            -
          </div>
          <div className={"col-md-1 col-xs-1 " + 
            (status === 'FINISHED' && 
              (homeGoals < awayGoals ? "winner" : 
              (homeGoals === awayGoals ? "draw" : "looser")))}>
            {awayGoals}
          </div>
          <div className={"col-md-4 col-xs-4 " + 
            (status === 'FINISHED' && 
              (homeGoals < awayGoals ? "winner" : 
              (homeGoals === awayGoals ? "draw" : "looser")))}>
            {away}
          </div>
        </div>
      </a>
    )
  }
}