import React, {Component} from 'react'

export default class Player extends Component {
  render() {
    const {player} = this.props
    return (
      <tr>
        <td className='text-center'>{player.jerseyNumber}</td>
        <td className='player-name'>{player.name}</td>
        <td className='position'>{player.position}</td>
        <td className='text-center hidden-xs'>{player.dateOfBirth}</td>
        <td className='text-center hidden-xs'>{player.nationality}</td>
      </tr>
    )
  }
}