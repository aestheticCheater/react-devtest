import FeaturedGames from 'components/layouts/FeaturedGamesContainer/FeaturedGames';
import TitleRow from 'components/layouts/TitleRow';
import React from 'react'

const SlotGames = () => {
  return (
    <>
      <TitleRow title="Featured games" />
      <FeaturedGames/>

      <TitleRow title="Slots" contentRight={'filter'} />
    </>
  )
}

export default SlotGames;