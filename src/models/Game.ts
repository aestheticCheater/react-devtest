interface Game {
    name: string,
    clientUrl: string,
    token: string,
    thumbnails: {
      imageUrl: string,
      videoUrl: string
    }[],
    liveData: {
      dealerName: string,
      playersCount: number
    }
}

export default Game;