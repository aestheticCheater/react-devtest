import { createContext, ReactNode, useContext } from 'react';
import { operatorToken, playerToken } from 'config';
import { useGet } from 'hooks';
import { User } from 'models';
interface ResponseType {
  data: User,
  errorMsg: string | null,
  successfull: boolean
}

const UserContext = createContext<User>({} as User)

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({children}: {children: ReactNode}) => {


      const state = useGet<ResponseType>('api/lobby/player', {
        params: {
          operatorToken,
          playerToken
        }
      })


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
