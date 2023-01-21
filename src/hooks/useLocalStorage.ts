import { useState, useEffect } from 'react'


const useLocalStorage = (key: any, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        let current 

        if (typeof window === "undefined") {
            return defaultValue;
          }
          
        try {
            current = JSON.parse(localStorage.getItem(key) || String(defaultValue))
          } catch (error) {
            current = defaultValue
          }
          return current
    })
    
    useEffect(() => {
        if (!localStorage.getItem(key) || (localStorage.getItem(key)?.length === 0))
            {localStorage.setItem(key, JSON.stringify(defaultValue))}
      }, [defaultValue, key])

      return [value, setValue]
}

function setLocalStorage(key:any, defaultValue: any, current: any) {
        localStorage.setItem(key, JSON.stringify(current))
        defaultValue(current)
}

export {useLocalStorage, setLocalStorage}