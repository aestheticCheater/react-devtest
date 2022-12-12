import { Game } from 'models';
import playersImage from 'assets/images/players.svg';
import defaultImg from 'assets/images/default_thumbnail.png';
import './style.css';

const LiveGame = ({liveData, thumbnails, name}: Game) => {

    const thumbnail = thumbnails?.[0] || {};

    return (
        <div className='live-game-card'>
            <div>
                <img src={thumbnail.imageUrl || defaultImg} alt={name} className="live-game-card__image" />
            </div>
            <div className="live-game-card__footer">
                {liveData.dealerName}

                <div className="live-game-card__players">
                    <span className='live-game-card__players-separator'>/</span>
                    <img src={playersImage} alt="players" className='live-game-card__players-img' />
                    {liveData.playersCount}
                </div>
            </div>
        </div>
    )
}

export default LiveGame;