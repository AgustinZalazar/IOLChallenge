import React, { createContext, useState } from 'react'

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [favCharacters, setFavCharacters] = useState([])

    return (
        <CharacterContext.Provider value={{
            favCharacters,
            setFavCharacters
        }}>
            {children}
        </CharacterContext.Provider>
    )
}