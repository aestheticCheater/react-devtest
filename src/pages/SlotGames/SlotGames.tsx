import { useState, useEffect } from 'react';
import FeaturedGames from 'components/layouts/FeaturedGamesContainer/FeaturedGames';
import TitleRow from 'components/layouts/TitleRow';
import './style.css';
import { Filter } from 'components';
import api, { ResponseType } from 'api';
import { useUserContext } from 'components/UserContext';
import { operatorToken } from 'config';

interface Game {

}

const SlotGames = () => {

  const [isOpen, setOpen] = useState(false)
  const [state, setState] = useState<ResponseType<Game> | null>(null)
  const {currency} = useUserContext()

  useEffect(() => {
    api.get<ResponseType<Game[]>>('api/lobby/games', {
      params: {
          currency,
          operatorToken,
          type: 'any'
      }
    }).then((response) => {
      setState(response.data)
    })
  })

  const toggleFilter = () => {
    setOpen(oldOpen => !oldOpen)
  }

  return (
    <>
      <TitleRow title="Featured games" />
      <FeaturedGames/>

      <TitleRow title="Slots" contentRight={(
        <button className={`${isOpen ? 'filter-button--active' : ''} filter-button`}  onClick={toggleFilter}>
          Filter
          <div className='filter-button__icon'>
            &#581;
          </div>
        </button>
      )} />

        {isOpen && <Filter />}
    </>
  )
}

export default SlotGames;