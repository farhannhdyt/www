import { useState } from 'react'

// components
import { Container, Footer, Header } from './components'

// styles
import { ThemeProvider } from 'styled-components'
import { darkColors, lightColors } from './styles/variables'
import { GlobalStyle } from './styles/global'

// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import { Works, About, Home } from './pages'

const App = () => {
  const storedTheme = localStorage.getItem('isDarkMode')
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'true' ? true : false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('isDarkMode', !isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkColors : lightColors}>
      <BrowserRouter>
        <GlobalStyle />

        {/* Header Component */}
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>

        {/* Footer Components */}
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export { App }
