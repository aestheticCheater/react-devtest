import { Fragment } from 'react';
import TitleRow from 'components/layouts/TitleRow';
import LiveGame from 'components/LiveGame';
import { useGetGames } from "hooks";
import { Game, GameType } from "models";
import './style.css';


const order: (keyof typeof GameType)[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "8",
  "9",
  "6",
  "7",
];


const LiveCasinoGames = () => {
  const data = useGetGames("live");

  if (!data) {
    return <>Loading...</>
  }

  const groupedData = data.reduce((groupedGames, game) => {
    if (!groupedGames[game.gameType]) {
      groupedGames[game.gameType] = []
    }
    groupedGames[game.gameType].push(game);
    return groupedGames;
  }, {} as { [key in keyof typeof GameType]: Game[] });

  return (
    <div className="live-casino-games">
     {order.map((group) =>
      groupedData[group] ? (
      <Fragment key={group}>
      <TitleRow title={GameType[group as keyof typeof GameType]} />
      <div className="container">
       <div className="live-casino-games__container">
       <div className="row">
       {groupedData[group].map((game) => (
       <div className="col" key={game.token}>
       <LiveGame {...game} />
       </div>
         ))}
       </div>
       </div>
       </div>
       </Fragment>
        ) : null
       )}
     </div>
   );
 };
 
 export default LiveCasinoGames;
 