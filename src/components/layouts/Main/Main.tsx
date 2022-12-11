import React, { FC, ReactNode } from 'react';
import Header from '../Header/Header';

interface MainProps {
  children: ReactNode
}

const Main = ({children}: MainProps) => {   
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Main;