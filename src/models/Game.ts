export const SlotGameTag = {
  "0": 'Free Spins',
  "1": 'Bonus Game',
  "2": 'Scatter Pays',
  "3": "Gamble",
  "4": "Mysteries",
  "5": "Wild",
  "6": "Fruits"
}


export const GameType = {
  "0": 'Slot V1',
  "1": 'Roulette',
  "2": 'Blackjack',
  "3": 'Unlimited Blackjack SP',
  "4": 'Unlimited Blackjack MP',
  "5": 'Andar Bahar',
  "6": 'Baccarat',
  "7": 'Dragon Tiger',
  "8": 'Teen Patti',
  "9": 'Teen Patti Face Off',
  "10": 'Slot V2'
}

interface Game {
    name: string,
    clientUrl: string,
    token: string,
    gameType: keyof typeof GameType,
    isFeatured: boolean,
    hostUrl: string,
    thumbnails: {
      imageUrl: string,
      videoUrl: string
    }[],
    liveData: {
      dealerName: string,
      playersCount: number
    },
    slotData: {
      linesCount: number,
      tags: (keyof typeof SlotGameTag)[]
    }
}

export default Game;