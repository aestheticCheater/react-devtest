import { Game } from 'models'
import playersImage from 'assets/images/players.svg'
import defaultImg from 'assets/images/default_thumbnail.png'
import './style.css'
import { Tooltip } from "react-tooltip";
import { operatorToken, playerToken } from 'config';

const LiveGame = ({liveData, thumbnails, name, token, hostUrl, clientUrl}: Game) => {

    const thumbnail = thumbnails?.[0] || {}
    const id = 'game-' + token

    return (
        <>
            <a 
                href={`${clientUrl}?gameToken=${token}&operatorToken=${operatorToken}&playerToken=${playerToken}&host=${hostUrl}`}
                target="_blank"
                rel="noreferrer"
                className='live-game-card'
                id={id}
            >
                <div>
                    <img src={thumbnail.videoUrl || defaultImg} alt={name} className="live-game-card__image" />
                </div>
                <div className="live-game-card__footer">
                    {name}
                    
                    <div className="live-game-card__players">
                        <span className='live-game-card__players-separator'>/</span>
                        <img src={playersImage} alt="players" className='live-game-card__players-img' />
                        {liveData.playersCount}
                    </div>
                </div>
            </a>
            <Tooltip anchorId={id} place={'bottom'} variant="warning" content={name} />
        </>
    )
}

export default LiveGame