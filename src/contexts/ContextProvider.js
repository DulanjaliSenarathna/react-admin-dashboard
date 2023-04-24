import React , {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}

export const ContextProvider = ({children}) =>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false); // right sidebar open or close

    const setMode = (e) =>{
        setCurrentMode(e.target.value);

        //when user come next time, still the previous mode is active
        localStorage.setItem('themeMode',e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) =>{
        setCurrentColor(color);

        //when user come next time, still the previous mode is active
        localStorage.setItem('colorMode',color);
        setThemeSettings(false);
    }

    const handleClick = (clicked) =>{
        setIsClicked({...initialState,[clicked]:true});// only change the value that has been clicked, set it to true
    }
    return (
        <StateContext.Provider value={{
           activeMenu,
           setActiveMenu,
           isClicked,
           setIsClicked,
           handleClick,
           screenSize,
           setScreenSize,
           currentColor,
           currentMode,
           setColor,
           setMode,
           themeSettings,
           setThemeSettings
        }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);