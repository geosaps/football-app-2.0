import React, {Component} from 'react';
import {Link} from 'react-router'
import Fexture from './fixture';

export default class Fextures extends Component {
  render() {
    const { fixtures, filteredFixtures, fixturesFilter } = this.props
    //making Set of leagues for filter
    let leagues = new Set(['All']);
    let fixturesFilterArray = ['444', '445', '449', '450', '452', '455', '456', '457', '464']
    let fixturesShown = filteredFixtures.filter( fixture => fixturesFilterArray.indexOf(fixture._links.competition.href.slice(45)) !== -1)

    fixtures.fixtures.map(fexture => leagues.add(leagueIdToName(fexture._links.competition.href.slice(45))))
    leagues = [...leagues]
    leagues = leagues.filter(league => league !== 'Other')
    return (
      <div className="container">
        <nav>
          <ul className="navigation text-center">
            <li><Link to={process.env.PUBLIC_URL + '/'}>HOME</Link></li>
            <li><Link to={process.env.PUBLIC_URL + '/fixtures'}>FIXTURES</Link></li>
            <li><Link to={process.env.PUBLIC_URL + '/competition'}>COMPETITION</Link></li>
          </ul>
        </nav>
        <header className="text-center">
          <h1 className="fixture-title">Latest fixtures</h1>
          <hr className="hr-small"/>
        </header>
        <ul className='list-inline text-center filter'>
          {leagues.map((league, i) =>
            <li className='list-inline-item' 
                key={i}
                onClick={e => {
                  e.preventDefault()
                  fixturesFilter(leagueNameToId(league))}}>{league}</li>
          )}
        </ul>
        <div className="fixtures list-group">
          {
            fixturesShown.map((fexture, i) =>
              <Fexture key={i}
                      date={fexture.date.slice(11, 16)}
                      home={fexture.homeTeamName}
                      status={fexture.status}
                      homeGoals={(fexture.result.goalsHomeTeam === null) ?
                            "?" : fexture.result.goalsHomeTeam}
                      awayGoals={(fexture.result.goalsAwayTeam === null) ?
                            "?" : fexture.result.goalsAwayTeam}
                      away={fexture.awayTeamName}/>        
              )
          }
        </div>
        <p className="footnote text-center">*beginings of the games are shown in CET (UTC+1)</p>
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

  function leagueNameToId(x) {
  let name;
  switch(x) {
    case 'Brazil': name ='444';
      break;
    case 'England': name ='445';
      break;
    case 'Netherland': name ='449';
      break;
    case 'France': name ='450';
      break;
    case 'Germany': name ='452';
      break;
    case 'Spain': name ='455';
      break;
    case 'Italy': name ='456';
      break;
    case 'Portugal': name ='457';
      break;
    case 'Champions League': name ='464';
      break;
    default: name = 'All';
  }
    return name;
  }