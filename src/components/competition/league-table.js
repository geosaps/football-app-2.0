import React, {Component} from 'react'
import Team from './team'



export default class LeagueTable extends Component {
  render() {
    const {getTeamInfo, setTeamName, teams} = this.props
    return (
      <div className="container">
        <table className="league-table table table-hover table-inverse">
          <thead className='text-center'>
            <tr>
              <td>Pos.</td>
              <td className="team">Team</td>
              <td>P</td>
              <td className="wins hidden-xs">W</td>
              <td className="hidden-xs">D</td>
              <td className="losses hidden-xs">L</td>
              <td className="goals hidden-xs">G</td>
              <td className="hidden-xs">GA</td>
              <td className="goalsDiff">GD</td>
              <td>Pts</td>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, i) => 
              <Team key={i} team={team} getTeamInfo={getTeamInfo} setTeamName={setTeamName}/>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}