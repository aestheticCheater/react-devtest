import { Tooltip } from "react-tooltip";
import defaultImg from 'assets/images/default_thumbnail.png'
import { Game, SlotGameTag } from "models";
import "./slotGame.css"
import { operatorToken, playerToken } from "config";

interface SlotGameTextRowProps {
    className: string,
    text: string
}

const SlotGameTextRow = ({text, className}: SlotGameTextRowProps) => {

    const parts = text.split(' ')

    return (
        <div className="slot-game__text-row">
                <div className={className}>
                        {parts[0]}
                    </div>
            {
                parts.length === 2 && parts[1]
            } 
    </div>
    )
}

const SlotGame = ({thumbnails, token, name, slotData, clientUrl, hostUrl}: Game) => {

    const thumbnail = thumbnails?.[0] || {}
    const id = 'slot-game-' + token

    return (
        <>
            <a
                href={`${clientUrl}?gameToken=${token}&operatorToken=${operatorToken}&playerToken=${playerToken}&host=${hostUrl}`}
                target="_blank"
                rel="noreferrer"
                className="slot-game"
                id={id}
            >
                <img src={thumbnail.imageUrl || defaultImg} alt={name} className="slot-game__img" />
                <div className="slot-game__text">
                    <SlotGameTextRow className="slot-game__text-row-lines" text={`${slotData.linesCount} Lines`} />
                    {
                        slotData.tags.map((tag) => (
                            <SlotGameTextRow key={tag} text={SlotGameTag[tag]} className="slot-game__text-row-tags" />
                        ))
                    }
                </div>
            </a>
            <Tooltip anchorId={id} place={'bottom'}  variant="warning" content={name}  />
        </>
    )
}

export default SlotGame;