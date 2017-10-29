import React, {Component} from 'react'
import Player from './player'

export default class TeamTable extends Component {
  render() {
    const {team} = this.props
    return (
      <div>
        <table className="team-table table table-hover table-inverse">
          <thead className='text-center'>
            <tr>
              <td>Number</td>
              <td className="player-name">Name</td>
              <td className="position">Position</td>
              <td className="hidden-xs">Date of Bitrh</td>
              <td className="hidden-xs">Nationality</td>
            </tr>
          </thead>
          <tbody>
            {team.map((player, i) => 
              <Player key={i} player={player}/>
            )}
          </tbody>
        </table>
      </div>
    )
  }

} 