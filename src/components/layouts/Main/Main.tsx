import { ReactNode } from 'react';
import Header from '../Header/Header';
import backgroundImage from 'assets/images/background.svg';
import './style.css';

interface MainProps {
  children: ReactNode
}

const Main = ({children}: MainProps) => {   
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className='main'>
      <Header  />
      {children}
    </div>
  )
}

export default Main;