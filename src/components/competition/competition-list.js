import React, {Component} from 'react';

export default class CompetitionList extends Component {

  render() {
    const { getLeagueTable, competitions } = this.props
    let competitionFilter = ['League One 2017/18', 'League Two 2017/18', 'Ligue 2 2017/18', '2. Bundesliga 2017/18', 'DFB-Pokal 2017/18', 'Serie B 2017/18', 'Champions League 2017/18', 'Australian A-League']
    let competitionsList = competitions.filter( (competition) => competitionFilter.indexOf(competition.caption) === -1 )
    return (
      <div className="container text-center">
        <h1 className="title">Football leagues</h1>
        <hr className="hr-small" />
        <div className='list-group competition-group'>
          {competitionsList.map((competition, i) => 
            <a key={i}
                onClick={e => {
                  e.preventDefault()
                  getLeagueTable(competition._links.leagueTable.href)
                }}
                className='list-group-item 
                    list-group-item-success
                    competition'>
                  {competitionName(competition.caption)}</a>
            )}
        </div>
      </div>
    )
  }
}


function competitionName (x) {
  let name;
  switch(x) {
    case 'Campeonato Brasileiro da Série A': name = 'Brazilian Serie A';
      break;
    case 'Premier League 2017/18': name = 'English Premier League';
      break;
    case 'Championship 2017/18': name = 'English Championship';
      break;
    case 'Eredivisie 2017/18': name = 'Dutch Eredivisie';
      break;
    case 'Ligue 1 2017/18': name = 'French Ligue 1';
      break;
    case '1. Bundesliga 2017/18': name = 'German Bundesliga';
      break;
    case 'Primera Division 2017': name = 'Spanish Primera';
      break;
    case 'Serie A 2017/18': name = 'Italian Serie A';
      break;
    case 'Primeira Liga 2017/18': name = 'Portuguese Primeira Liga';
      break;
    default: name = x;
  }
  return name;
}