import {useState, Fragment} from 'react'
import FeaturedGames from 'components/layouts/FeaturedGamesContainer/FeaturedGames';
import TitleRow from 'components/layouts/TitleRow'
import './style.css'
import { Filter } from 'components';
import { useGetGames } from 'hooks';
import { Game } from 'models';
import SlotGame from 'components/SlotGame';


const SlotGames = () => {

  const [isOpen, setOpen] = useState(false)
  const [filter, setFilter] = useState<{[key: string]: {[key: string]: (game: Game) => boolean}}>({})

  const toggleFilter = () => {
    setOpen(oldOpen => !oldOpen)
  }

  const data = useGetGames('slots')

  if (!data) {
    return <>Loading...</>
  }

  const filterValues = Object.values(filter)

  let filteredData = data

  if (filterValues.length) {
    filteredData = data.filter((game) => filterValues.every((row) => Object.values(row).some((filter) => filter(game))))
  }

  return (
    <>
      <TitleRow title="Featured games" />
      <FeaturedGames games={data} />

      <TitleRow title="Slots" contentRight={(
        <button className={`${isOpen ? 'filter-button--active' : ''} filter-button`}  onClick={toggleFilter}>
          Filter
          <div className='filter-button__icon'>
            &#581;
          </div>
        </button>
      )} />

        {isOpen && <Filter filter={filter} setFilter={setFilter} />}
        <div className="slot-games">

      <div className="container">

      <div className="row">
        {
          filteredData.map((game) => (
            <div className="col" key={game.token}>
            <SlotGame {...game} />
            </div>
          ))
        }
        </div>
        </div>
        </div>
    </>
  )
}

export default SlotGames;