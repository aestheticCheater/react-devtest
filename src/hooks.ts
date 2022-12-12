import api from 'api';
import { AxiosRequestConfig } from 'axios';
import { refetchTime } from 'config';
import { useEffect, useState } from 'react';

export const useGet = <Data = any>(url: string, config?: AxiosRequestConfig) => {

    const [state, setState] = useState<Data | null>(null);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const fetch = () => {
            api.get<Data>(url, config).then((response) => {
                setState(response.data);
                timeout = setTimeout(fetch, refetchTime);
            })
        }

        fetch()

        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return state;
}