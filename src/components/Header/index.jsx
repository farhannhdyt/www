import { useState, useEffect } from 'react'
import { Container } from '../Container'
import { StyledButtonTheme, StyledHeader, StyledHeaderFlex, StyledMenu } from './styles'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

// react-router-dom
import { NavLink } from 'react-router-dom'

const Header = ({ toggleTheme, isDarkMode }) => {
  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    if (scroll !== window.pageYOffset > 0) {
      setScroll(window.pageYOffset > 0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <StyledHeader className={scroll ? 'scroll' : ''}>
      <Container>
        <StyledHeaderFlex>
          <StyledMenu>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/works" end>
                Works
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" end>
                About Me
              </NavLink>
            </li>
          </StyledMenu>

          <StyledButtonTheme onClick={() => toggleTheme()}>
            {isDarkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
          </StyledButtonTheme>
        </StyledHeaderFlex>
      </Container>
    </StyledHeader>
  )
}

export { Header }
