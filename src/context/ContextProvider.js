import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext(); 

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = (({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03c9d7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [ themeSettings, setThemeSettings ] = useState(false)

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }
    
    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.targe.value);
    }
    
    const setColor = (e) => {
        setCurrentColor(e);

        localStorage.setItem('colorMode', e);
    }

    return(
        <StateContext.Provider value={{
            activeMenu: activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            setColor,
            setMode,
            currentMode, setCurrentMode,
            currentColor, setCurrentColor,
            themeSettings, setThemeSettings

            }}>
                {children}
        </StateContext.Provider>
    )
})

export const useStateContext = () => useContext(StateContext);