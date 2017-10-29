import React, {Component} from 'react'

export default class Team extends Component {
  render() {
    const { getTeamInfo, setTeamName, team } = this.props
    return(
      <tr onClick={e => {
                  e.preventDefault()
                  setTeamName(team)
                  getTeamInfo(team._links.team.href + "/players")
                }}>
        <td>{team.position}</td>
        <td className="team">{team.teamName}</td>
        <td>{team.playedGames}</td>
        <td className="wins hidden-xs">{team.wins}</td>
        <td className="hidden-xs">{team.draws}</td>
        <td className="losses hidden-xs">{team.losses}</td>
        <td className="goals hidden-xs">{team.goals}</td>
        <td className="hidden-xs">{team.goalsAgainst}</td>
        <td className="goalsDiff">{team.goalDifference}</td>
        <td>{team.points}</td>
      </tr>
    )
  }
}