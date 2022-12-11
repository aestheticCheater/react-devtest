import { ReactElement } from 'react';
import './section-title.css';

interface TitleRowProps {
    title: string,
    contentRight?: ReactElement | string
}

const TitleRow = ({title, contentRight}: TitleRowProps) => {
  return (
      <div className='title-row'>
          <div className="container title-row__content">
              
          <h3 className='title-row__title'>
              {title}
          </h3>

          {contentRight}
          </div>
    </div>
  )
}

export default TitleRow;