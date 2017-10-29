import React, {Component} from 'react'
import Team from './team'



export default class LeagueTable extends Component {
  render() {
    const {teams} = this.props
    console.log(teams)
    return (
      <div className="container">
        <table className="league-table table table-hover table-inverse">
          <thead className='text-center'>
            <tr>
              <td>Pos.</td>
              <td>Team</td>
              <td>P</td>
              <td>GD</td>
              <td>Pts</td>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, i) => 
              <Team key={i} team={team}/>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}