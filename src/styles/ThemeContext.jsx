import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
  const initialTheme = ()=>localStorage.getItem("theme")||"light";
  const [mode, setMode] = useState(initialTheme);
  const primaryColor = '#E1C06F'
  const primaryDarkColor = '#846522'
  useEffect(()=>{
    localStorage.setItem("theme", mode);
  },[mode]);

  const theme = useMemo(()=>{
    return createTheme({
      palette: {
        mode: mode === "light"?"light":"dark",
        primary: {
          main: primaryColor,
          dark: primaryDarkColor
        }
      },
      typography: {
        fontFamily: "Quicksand, Arial, Sans-serif"
      }
    })
  },[mode]);

  const toggleMode = ()=>{
    setMode(prevMode=>(prevMode==="light"?"dark":"light"));
    localStorage.setItem("theme", mode);
  };

  return <ThemeContext.Provider value={{mode, toggleMode}}>
    <ThemeProvider theme={theme}>
    {children}
    </ThemeProvider>
    </ThemeContext.Provider>
}

