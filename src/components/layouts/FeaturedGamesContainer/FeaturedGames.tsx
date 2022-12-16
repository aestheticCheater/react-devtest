import SlotGame from "components/SlotGame";
import { Game } from "models";

interface FeaturedGamesProps {
  games: Game[]
}

const FeaturedGames = ({games}: FeaturedGamesProps) => {

  if (!games) {
    return null;
  }

  const featuredGames = games.filter((game) => game.isFeatured)

  return (
    <div className="featuredgames__container">
      <div className="container">
        <div className="row">

        {
          featuredGames.map((game) => (
            <div className="col" key={game.token}>
            <SlotGame {...game} />
            </div>
            ))
          }
    </div>
          </div>
          </div>
  )
}

export default FeaturedGames;