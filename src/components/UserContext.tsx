import { useState, useEffect, createContext, ReactNode, useContext } from 'react';
import { operatorToken, playerToken } from 'config';
import api, { ResponseType } from "api";

interface User {
    balance: number,
    currency: string,
    username: string
}

const UserContext = createContext<User>({} as User)

export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = ({children}: {children: ReactNode}) => {

    const [state, setState] = useState<ResponseType<User> | null>(null)

    useEffect(() => {
      api.get<ResponseType<User>>('api/lobby/player', {
        params: {
            operatorToken,
            playerToken
        }
      }).then((response) => {
        setState(response.data)
      })
    }, [])

    if (state?.errorMsg) {
      return <>Error {state.errorMsg}</>
    }

    if (!state) {
      return <>Loading...</>
    }

  return (
    <UserContext.Provider value={state.data}>
      {children}
    </UserContext.Provider>
  )
}
