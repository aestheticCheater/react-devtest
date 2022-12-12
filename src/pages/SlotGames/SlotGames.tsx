import { useState} from 'react';
import FeaturedGames from 'components/layouts/FeaturedGamesContainer/FeaturedGames';
import TitleRow from 'components/layouts/TitleRow';
import './style.css';
import { Filter } from 'components';


const SlotGames = () => {

  const [isOpen, setOpen] = useState(false);

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