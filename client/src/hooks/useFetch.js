import {useState, useCallback, useEffect} from 'react'
import api from '../services/API'

export const useFetch = (options) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetcher = useCallback( () => {
        setLoading(true)

        return api(options)
            .then(res => {
                setData(res)
            })
            .catch(e => {
                setError(e.message)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetcher()
    }, [])

    return [{ data, error, loading }, fetcher]
}