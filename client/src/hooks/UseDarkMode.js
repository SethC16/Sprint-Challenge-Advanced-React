import { useEffect } from 'react';
import { useLocalStorage } from './UseLocalStorage';

export const useDarkMode = (initialValue) => {
    const [ value, setValue ] = useLocalStorage('dark-mode', initialValue);
    const element = document.body;

    useEffect(() => {
        if (value === true) {
            return element.classList.add('dark-mode')
        } else {
            return element.classList.remove('dark-mode')
        }
    }, [value]);

    return [ value, setValue ]
}