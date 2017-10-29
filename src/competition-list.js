import React, {Component} from 'react';

export default class CompetitionList extends Component {

  render() {
    const { getLeagueTable, competitions } = this.props
    
    return (
      <div className="container text-center">
        <h1 className="title">Football leagues:</h1>
        <div className='list-group competition-group'>
          {competitions.map((competition, i) => 
            <a key={i}
                onClick={e => {
                  e.preventDefault()
                  getLeagueTable(competition._links.leagueTable.href)
                }}
                className='list-group-item 
                    list-group-item-success
                    competition'>
                  {competition.caption}</a>
            )}
        </div>
      </div>
    )
  }
}