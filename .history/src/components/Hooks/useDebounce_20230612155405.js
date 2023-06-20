import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
    const [data, setData] = useState()
    useEffect(() => {
        const handle = setTimeout(() =>
            setData(value), delay)
        return () => clearTimeout(handle)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    return data
};

export default useDebounce;