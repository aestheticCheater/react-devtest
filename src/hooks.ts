import {useEffect, useState} from 'react'
import { useUserContext } from 'components/UserContext';
import api from 'api'
import { AxiosRequestConfig } from 'axios'
import { operatorToken, refetchTime } from 'config'
import { Game } from 'models';

export const useGet = <Data>(url: string, config?: AxiosRequestConfig) => {

    const [state, setState] = useState<Data | null>(null)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        const fetch = () => {
            api.get<Data>(url, config).then((response) => {
                setState(response.data)
                timeout = setTimeout(fetch, refetchTime)
            })
        }
        fetch()

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return state
}


export const useGetGames = (
    type: 'any' | 'live' | 'slots'
) => {

    const {currency} = useUserContext()

    const data = useGet<Game[]>('api/lobby/games', {
        params: {
            operatorToken: operatorToken,
            currency,
            type
        }
    })
    return data
}