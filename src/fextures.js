import React, {Component} from 'react';
import Fexture from './fexture';

export default class Fextures extends Component {
  render() {
    const { fextures } = this.props
    //making Set of leagues for filter
    let leagues = new Set([]);
    fextures.fixtures.map(fexture => leagues.add(leagueIdToName(fexture._links.competition.href.slice(45))))
    leagues = [...leagues]
    console.log(fextures.fixtures)
    console.log(leagues)
    return (
      <div className="container">
        <header className="text-center">
          <h1 className="fixture-title">Latest fixtures:</h1>
          <p className="footnote">*beginings of the games are shown in CET (UTC+1)</p>
        </header>
        <ul className='list-inline text-center filter'>
          {leagues.map((league, i) =>
            <li className='list-inline-item' key={i}>{league}</li>
          )}
        </ul>
        <div className="fixtures list-group">
          {
            fextures.fixtures.map((fexture, i) =>
              <Fexture key={i}
                      date={fexture.date.slice(11, 16)}
                      home={fexture.homeTeamName}
                      homeGoals={(fexture.result.goalsHomeTeam === null) ?
                            "?" : fexture.result.goalsHomeTeam}
                      awayGoals={(fexture.result.goalsAwayTeam === null) ?
                            "?" : fexture.result.goalsAwayTeam}
                      away={fexture.awayTeamName}/>           
              )
          }
        </div>
      </div>
    )
  }
}

function leagueIdToName(x) {
  let name;
  switch(x) {
    case '444': name ='Brazil';
      break;
    case '445': name ='England';
      break;
    case '449': name ='Netherland';
      break;
    case '450': name ='France';
      break;
    case '452': name ='Germany';
      break;
    case '455': name ='Spain';
      break;
    case '456': name ='Italy';
      break;
    case '457': name ='Portugal';
      break;
    case '464': name ='Champions League';
      break;
    default: name = 'Other';
  }
    return name;
  }