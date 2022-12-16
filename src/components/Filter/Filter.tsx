import { Game } from 'models';
import { SlotGameTag } from 'models/Game';
import './style.css';

interface FilterProps {
    setFilter: React.Dispatch<React.SetStateAction<{
        [key: string]: {
            [key: string]: (game: Game) => boolean;
        };
    }>>,
    filter: {
        [key: string]: {
            [key: string]: (game: Game) => boolean;
        };
    }
}

interface FilterRowType {
    text: string,
    filter: (game: Game) => boolean
}

const linesFilter = (game: Game, min?: number | null, max?: number | null): boolean => {
    const linesCount = game.slotData.linesCount

    if (min && linesCount < min) {
        return false;
    }

    if (max && linesCount > max) {
        return false;
    }

    return true;
}


const columns: {name: string, rows: FilterRowType[]}[] = [
    {
        name: 'Lines',
        rows: [
            {
                text: '5-9',
                filter: (game) => linesFilter(game, 5, 9)
            },
            {
                text: '10-25',
                filter: (game) => linesFilter(game, 10, 25)
            },
            {
                text: '25-50',
                filter: (game) => linesFilter(game, 25, 50) 
            },
            {
                text: '>50',
                filter: (game) => linesFilter(game, 50)
            }
        ]
    },
    {
        name: 'Game Features',
        rows: Object.entries(SlotGameTag).map(([tag, text]) => ({
            text,
            filter: (game) => game.slotData.tags.includes(+tag as any)
        }))
    }
]


const Filter = ({setFilter, filter}: FilterProps) => {

    const onChange = (name: string, {text, filter}: FilterRowType) => {
        setFilter((oldFilter) => {
            if (oldFilter[name]) {
                if (oldFilter[name][text]) {
                    delete oldFilter[name][text]
                    if (!Object.keys(oldFilter[name]).length) {
                        delete oldFilter[name]
                    }
                } else {
                    oldFilter[name][text] = filter
                }
            } else {
                oldFilter[name] = {[text]: filter}
            }
            return {...oldFilter}
        })
    }

  return (
    <div className="container">
    <div className='filter'>
    <div className="row">

        {
            columns.map(({name, rows}) => (
                <div className="col" key={name}>
                    <h6 className="filter__title">
                        {name}
                    </h6>
                    {
                        rows.map((row) => (
                            <div className="filter__item" key={row.text}>
                            <input type="checkbox" onChange={() => onChange(name, row)} checked={Boolean(filter[name]?.[row.text])} />
                            {row.text}
                        </div>
                        ))
                    }
                </div>
            ))
        }
        </div>
    </div>
    </div>
  )
}

export default Filter;