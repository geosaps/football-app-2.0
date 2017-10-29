import React, {Component} from 'react';

export default class Feaxture extends Component {
  render() {
    const {date, home, homeGoals, awayGoals, away} = this.props
    const cestDate = date.split(":").map((date, i) => (i === 0) ? date = Number(date) + 2 : date).join(":")
    return (
      <a className="list-group-item fixture">
        <div className="row">
          <div className="col-md-1 col-xs-1">
            {cestDate}
          </div>
          <div className="col-md-4 col-xs-4">
            {home}
          </div>
          <div className="col-md-1 col-xs-1">
            {homeGoals}
          </div>
          <div className="col-md-1 col-xs-1">
            -
          </div>
          <div className="col-md-1 col-xs-1">
            {awayGoals}
          </div>
          <div className="col-md-4 col-xs-4">
            {away}
          </div>
        </div>
      </a>
    )
  }
}