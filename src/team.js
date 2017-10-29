import React, {Component} from 'react'

export default class Team extends Component {
  render() {
    const { team } = this.props
    return(
      <tr>
        <td className='text-center'>{team.position}</td>
        <td>{team.teamName}</td>
        <td className='text-center'>{team.playedGames}</td>
        <td className='text-center'>{team.goalDifference}</td>
        <td className='text-center'>{team.points}</td>
      </tr>
    )
  }
}