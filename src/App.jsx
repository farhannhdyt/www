// components
import { Banner, Container, Header } from './components'

// styles
import { ThemeProvider } from 'styled-components'
import { darkColors } from './styles/variables'
import { GlobalStyle } from './styles/global'

// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Works, About, Home } from './pages'

const App = () => {
  return (
    <ThemeProvider theme={darkColors}>
      <BrowserRouter>
        <GlobalStyle />

        {/* Header Component */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export { App }
