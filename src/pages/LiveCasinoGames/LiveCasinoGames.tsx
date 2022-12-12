import { Fragment } from 'react';
import TitleRow from 'components/layouts/TitleRow';
import LiveGame from 'components/LiveGame';
import { useUserContext } from 'components/UserContext';
import { operatorToken } from 'config';
import { useGet } from 'hooks';
import { Game } from 'models';
import './style.css';

const LiveCasinoGames = () => {

  const { currency } = useUserContext();

  const data = useGet<Game[]>('api/lobby/games', {
    params: {
      operatorToken,
      currency,
      type: 'live'
    }
  })

  if (!data) {
    return <>Loading...</>
  }

  const groupedData = data.reduce((groupedGames, game) => {
    if (!groupedGames[game.name]) {
      groupedGames[game.name] = []
    } 
    groupedGames[game.name].push(game);
    return groupedGames;
  }, {} as {[key: string]: Game[]})

  return (
    <div className='live-casino-games'>
    {
      Object.entries(groupedData).map(([name, games]) => (
        <Fragment key={name}>
        <TitleRow title={name} />
        <div className="live-casino-games__container">
        <div className='row'>
          {
            games.map((game) => (
              <div className="col" key={game.token}>
              <LiveGame {...game} />
              </div>
            ))
          }
        </div>
          </div>
        </Fragment>
      ))
    }
    </div>
  )
}

export default LiveCasinoGames;