import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from 'react';
import { createContext } from 'react'
import User from './pages/User';




export const DarkContext = createContext(undefined);






const DarkContextProvider = ({ children }) => {

  const options = ["English", "Polish"];

  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState(options[0])
  return(
    <DarkContext.Provider value={{darkMode, setDarkMode, language, setLanguage, options}}>
      {children}
    </DarkContext.Provider>
  )
}

export default function App() {




  return (
    <div className="app">
       <DarkContextProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/:user" element={<User/>} />
      </Routes>
      </DarkContextProvider>
    </div>
  );
}


